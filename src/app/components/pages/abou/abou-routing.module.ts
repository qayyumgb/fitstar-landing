import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAboutComponent } from './menu-about/menu-about.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: MenuAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbouRoutingModule { }
