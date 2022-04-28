import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbouRoutingModule } from './abou-routing.module';
import { MenuAboutComponent } from './menu-about/menu-about.component';
import { MainLandingModule } from '../main-landing/main-landing.module';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    MenuAboutComponent,
    CollaboratorsComponent
  ],
  imports: [
    CommonModule,
    AbouRoutingModule,
    CarouselModule,
    MainLandingModule
  ]
})
export class AbouModule { }
