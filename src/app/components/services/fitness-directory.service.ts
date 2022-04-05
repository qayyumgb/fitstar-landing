import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/app/shared/endpoints/global';
import {FitnessDirectoryEnum} from '../../shared/enum/fitnessDirectoryEnums'

@Injectable({
  providedIn: 'root'
})
export class FitnessDirectoryService {

  constructor(private http: HttpClient) { }

  async getFitnessDirectoryByCategory(categoryName: FitnessDirectoryEnum): Promise<any> {
    return await this.http.get(API_ENDPOINTS.fitnessPro + categoryName).toPromise() as any;
  }

}
