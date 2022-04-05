import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SendCodeComponent } from './send-code/send-code.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
            },
            {
                path: 'send-code',
                component: SendCodeComponent,
            },
            {
                path: 'enter-code',
                component: EnterCodeComponent,
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
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
