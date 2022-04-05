import { Component, OnInit } from '@angular/core';
import { AboutPageDetails, ILandingPage } from 'src/app/shared/interfaces/landing-page.interface';
import { LandingPageService } from './../../../services/landing-page.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutUsObject: AboutPageDetails;
  constructor(private landingPageService: LandingPageService) { }

  ngOnInit(): void {
    this.landingPageService.getLandingPage().subscribe((response: ILandingPage) => {
      this.aboutUsObject = response.data.aboutPageDetails;
    })
  }

}
