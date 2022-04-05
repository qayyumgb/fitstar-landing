import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/components/services/shared.service';
import { IData, ILandingPage } from '../interfaces/landing-page.interface';
import { LandingPageService } from './../../components/services/landing-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  landingPageData: IData;
  constructor(private sharedService: SharedService, private landingPageService: LandingPageService) { }

  ngOnInit(): void {
    this.sharedService.getLandingPageApiData.subscribe((response: IData) => {
      this.landingPageData = response;
    })
    if (!this.landingPageData) {
      this.landingPageService.getLandingPage().subscribe((response: ILandingPage) => {
        this.landingPageData = response.data;
      }
      )
    }
  }


}
