import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/pages/pages.module').then(m => m.PagesModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: "myaccount",
    loadChildren: () => import('../app/components/pages/my-account/my-account.module').then(m => m.MyAccountModule)
  },
  {
    path: "about-us",
    loadChildren: () => import('../app/components/pages/abou/abou.module').then(m => m.AbouModule)
  },
  {
    path: "blog",
    loadChildren: () => import('../app/components/pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: "contact",
    loadChildren: () => import('../app/components/pages/contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
