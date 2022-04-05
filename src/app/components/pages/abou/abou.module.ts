import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbouRoutingModule } from './abou-routing.module';
import { MenuAboutComponent } from './menu-about/menu-about.component';
import { MainLandingModule } from '../main-landing/main-landing.module';


@NgModule({
  declarations: [
    MenuAboutComponent
  ],
  imports: [
    CommonModule,
    AbouRoutingModule,
    MainLandingModule
  ]
})
export class AbouModule { }
