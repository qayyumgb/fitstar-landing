import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_ENDPOINTS } from '../shared/endpoints/global';
import { IFitPro } from '../shared/interfaces/fit-pro.interface';
import { IFitnessDirFilter } from '../shared/interfaces/landing-page.interface';
import { IProfileInfo, IProfileInfoUpdate } from '../shared/interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  //getting all data
  getAllProfileInfo(): Observable<IProfileInfo> {
    return this.http.get<IProfileInfo>(API_ENDPOINTS.profileInfo);
  }

  updateProfile(data: any): Observable<any> {
    return this.http.post<any>(`${API_ENDPOINTS.updateProfile}`, data);
  }

  filterFitnessDir(args: IFitnessDirFilter): Observable<any> {
    let url = `${API_ENDPOINTS.fitnessDirFilter}?role=${args.role}`
    if (args.name) {
      url = `${url}&name=${args.name}`;
    }
    if (args.location) {
      url = `${url}&location=${args.location}`;
    }
    if (args.specialities) {
      url = `${url}&specialities=${args.specialities}`;
    }
    return this.http.get<any>(url);
  }


  getProfileById(id: string): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.profileById + id).pipe(map((res: any) => {
      return res
    }))
  }

}
