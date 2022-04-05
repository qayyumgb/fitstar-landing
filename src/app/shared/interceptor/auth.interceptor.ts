import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SharedService } from 'src/app/components/services/shared.service';
import { AuthService } from './../../components/services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private auhService: AuthService,
        private sharedService: SharedService,
        
    ) {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        let accessToken = this.auhService.getAccessToken();
        this.sharedService.loaderSubject.next(true);

        return this.processRequestWithToken(accessToken as any, req, next).pipe(
            finalize(() => {
                this.sharedService.loaderSubject.next(false);
            }),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';

                if (error.error instanceof ErrorEvent) {
                    console.log('CLIENT Side Error');
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message
                        }, Possible Reason: ${(error.error && error.error['Error']) || 'Unknown'
                        }`;
                    if (error.status === 401) {
                        // Logout Existing User
                        this.auhService.logout();
                       
                        //  alert('Your session has been expired. Please sign in again.'); 
                       
                    }
                }

                return throwError(errorMsg);
            })
        );
    }

    private processRequestWithToken(
        token: string,
        req: HttpRequest<any>,
        next: HttpHandler
    ) {
        if (!!token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }

        return next.handle(req);
    }
}
