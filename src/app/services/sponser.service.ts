import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../shared/endpoints/global';
import { ISponsorEntity } from '../shared/interfaces/sponser.interface';





var token = localStorage.token;
var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer ' + token,

});

const httpOptions = {
    headers: headers_object
};

@Injectable({
    providedIn: 'root'
})

export class SponsorService {


    constructor(private http: HttpClient) { }

    //getting User  data
    getAllSponsor(limit: number, offset: number): Observable<ISponsorEntity> {
        console.log(API_ENDPOINTS.sponsorList)
        return this.http.get<ISponsorEntity>(API_ENDPOINTS.sponsorList + `${limit}/${offset}`);
    }

}
