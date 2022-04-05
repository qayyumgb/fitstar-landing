import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './account/about/about.component';





const routes: Routes = [
  { path: 'myaccount', component: AccountComponent, pathMatch: 'full' },
  { path: 'myaccount/:id', component: AccountComponent },
  { path: 'about', component: AboutComponent, outlet: 'account' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
