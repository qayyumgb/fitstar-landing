import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
// import { addUsers } from '../../Models/models';
import { API_ENDPOINTS } from '../../shared/endpoints/global';

@Injectable({
  providedIn: 'root'
})
export class ReferralUserService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.userList);
  }
}
