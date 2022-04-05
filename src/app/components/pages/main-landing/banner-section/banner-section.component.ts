import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/shared/interfaces/landing-page.interface';
import { headerSlider } from 'src/app/shared/utils/banner-slider';
import { LandingPage } from './../../../../shared/interfaces/landing-page.interface';
import { SharedService } from './../../../services/shared.service';
@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit {
  headerSlider = headerSlider
  bannerImagesList: LandingPage[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getLandingPageApiData.subscribe((response: IData) => {
      this.bannerImagesList = response.landingPage;
    })
  }

}
