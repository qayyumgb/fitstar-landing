import { Component, OnInit } from '@angular/core';
import { ILandingPage, TermConditions } from 'src/app/shared/interfaces/landing-page.interface';
import { LandingPageService } from './../../../services/landing-page.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  termsCondition: TermConditions
  constructor(private landingPageService: LandingPageService) { }

  ngOnInit(): void {
    this.landingPageService.getLandingPage().subscribe((response: ILandingPage) => {
      this.termsCondition = response.data.termConditions;
    })
  }

}
