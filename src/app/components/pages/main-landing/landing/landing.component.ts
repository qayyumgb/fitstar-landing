import { Component, OnInit } from '@angular/core';
import { IData, ILandingPage } from 'src/app/shared/interfaces/landing-page.interface';
import { LandingPageService } from '../../../services/landing-page.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  landingPageDate: IData;
  constructor(private landingPageService: LandingPageService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.landingPageService.getLandingPage().subscribe((response: ILandingPage) => {
      this.landingPageDate = response.data;
      this.sharedService.setLandingPageApiData(response.data)
    })
  }

}
