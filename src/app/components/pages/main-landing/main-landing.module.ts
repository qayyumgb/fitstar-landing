import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLandingRoutingModule } from './main-landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AmbassadorComponent } from './ambassador/ambassador.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TopFitnessComponent } from './top-fitness/top-fitness.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SharedModule } from './../../../shared/shared.module';
import { FitnessDirectoryModule } from '../fitness-directory/fitness-directory.module';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    LandingComponent,
    BannerSectionComponent,
    AboutUsComponent,
    AmbassadorComponent,
    SponsorComponent,
    TopFitnessComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    MainLandingRoutingModule,
    CarouselModule,
    SharedModule,
    FitnessDirectoryModule,
    ModalModule.forRoot()
  ],
  exports: [
    AboutUsComponent
  ]
})
export class MainLandingModule { }
