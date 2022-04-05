import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent, pathMatch: 'full' },
            {
                path: 'forgetPassword',
                component: ForgetPasswordComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },


        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
