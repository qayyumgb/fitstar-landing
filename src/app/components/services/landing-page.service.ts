import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { API_ENDPOINTS } from 'src/app/shared/endpoints/global';
import { IFitPro } from 'src/app/shared/interfaces/fit-pro.interface';
import { ILandingPage, ITopFitnessPro } from 'src/app/shared/interfaces/landing-page.interface';
import { IProfileInfo } from 'src/app/shared/interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) {

  }

  getLandingPage(): Observable<ILandingPage> {
    return this.http.get<ILandingPage>(API_ENDPOINTS.getLandingPage).pipe(map((res: ILandingPage) => {
      return res
    }))
  }

  getFitnessPro(): Observable<IFitPro> {
    return this.http.get<IFitPro>(API_ENDPOINTS.fitnessPro + '/1000/1').pipe(map((res: IFitPro) => {
      return res
    }))
  }


  getFitnessDir(role: string): Observable<IFitPro> {
    return this.http.get<IFitPro>(API_ENDPOINTS.fitnessDir + role + '/1000/1').pipe(map((res: IFitPro) => {
      return res
    }))
  }


}



