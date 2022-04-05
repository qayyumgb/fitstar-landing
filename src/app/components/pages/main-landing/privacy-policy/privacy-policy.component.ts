import { Component, OnInit } from '@angular/core';
import { ILandingPage, PrivacyDetails } from 'src/app/shared/interfaces/landing-page.interface';
import { LandingPageService } from '../../../services/landing-page.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicy: PrivacyDetails;

  constructor(private landingPageService: LandingPageService) { }

  ngOnInit(): void {
    this.landingPageService.getLandingPage().subscribe((response: ILandingPage) => {
      this.privacyPolicy = response.data.privacyDetails;

    })
  }

}
