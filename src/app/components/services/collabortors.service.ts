import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
// import { addUsers } from '../../Models/models';
import { API_ENDPOINTS } from '../../shared/endpoints/global';
@Injectable({
  providedIn: 'root'
})
export class CollabortorsService {
  constructor(private http: HttpClient) { }

  getAllCollaborators(limit: number, offset: number): Observable<any> {

    console.log(API_ENDPOINTS.collaboratorList)
    return this.http.get<any>(API_ENDPOINTS.collaboratorList + `${limit}/${offset}`);
}
}
