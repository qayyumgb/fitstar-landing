import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPagesComponent } from './main-pages/main-pages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: '',
    component: MainPagesComponent,
    children: [

      {
        path: 'main',
        loadChildren: () =>
          import('../pages/main-landing/main-landing.module').then(
            (m) => m.MainLandingModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../pages/blog/blog.module').then(
            (m) => m.BlogModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../pages/fitness-directory/fitness-directory.module').then(
            (m) => m.FitnessDirectoryModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../pages/abou/abou.module').then(
            (m) => m.AbouModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../pages/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../pages/my-account/my-account.module').then(
            (m) => m.MyAccountModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
