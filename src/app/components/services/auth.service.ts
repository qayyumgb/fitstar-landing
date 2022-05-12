import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from 'src/app/shared/endpoints/global';
import { ILogIn, ILoginResponse } from 'src/app/shared/interfaces/login.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRegister, IRegisterResponse } from 'src/app/shared/interfaces/sign-up.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {

  }

  // Clears the token
  async logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['']);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }


  login(loginObj: ILogIn): Observable<ILoginResponse> {
    return this.http.post(API_ENDPOINTS.loginIn, loginObj).pipe(
      map<any, any>(res => {
        return res
      })
    )
  }

  signUp(signUpObj: IRegister): Observable<IRegisterResponse> {
    return this.http.post(API_ENDPOINTS.signUp, signUpObj).pipe(
      map<any, any>(res => {
        return res
      })
    )
  }




  public isAuthenticated(): boolean | null | '' {
    let accessToken = this.getAccessToken();
    return accessToken && accessToken.length > 0;
  }

  // async logout() {
  //   localStorage.removeItem('accessToken');
  //   this.router.navigate(['/login']);
  // }

  // public getAccessToken(): string | null {
  //   return localStorage.getItem('accessToken');
  // }
  public setAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }



}
