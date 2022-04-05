import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { } from './ambassador/ambassador.component';
import { LandingComponent } from './landing/landing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLandingRoutingModule { }
