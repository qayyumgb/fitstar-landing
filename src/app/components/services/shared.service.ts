import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IData } from 'src/app/shared/interfaces/landing-page.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  headerSubject: Subject<boolean> = new Subject<boolean>();


  constructor() { }

  private landingPageApiData: Subject<any> = new Subject<any>();

  get getLandingPageApiData() {
    return this.landingPageApiData.asObservable();
  }

  get getHeaderData() {
    return this.headerSubject.asObservable();
  }

  setLandingPageApiData(data: any) {
    this.landingPageApiData.next(data);
  }

  setHeaderData(data: boolean) {
    this.headerSubject.next(data);
  }
}
