
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../shared/endpoints/global';
import { IAmbassadors } from '../shared/interfaces/ambassador.interface';


@Injectable({
    providedIn: 'root',
})
export class AmbassadorService {

    constructor(private http: HttpClient) { }

    //getting all data
    getAllAmbassador(limit: number, offset: number): Observable<IAmbassadors> {

        console.log(API_ENDPOINTS.ambassadorList)
        return this.http.get<IAmbassadors>(API_ENDPOINTS.ambassadorList + `${limit}/${offset}`);
    }




}
