import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/services/auth.service';
import { FitStarRegex } from 'src/app/shared/constants/login';
import { ILoginResponse } from 'src/app/shared/interfaces/login.interface';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fieldTextType: boolean;
  submitted:boolean=false;
  referralUser:any[]=[];

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.pattern(FitStarRegex.email)],
      updateOn: 'blur',
    }),
    
    password: new FormControl('', Validators.required)
  })


  get f() {
    return this.loginForm?.controls;
  }
  
  // get f(): { [key: string]: AbstractControl } {
  //   return this.loginForm.controls;
  // }
  constructor( private router: Router, private authService: AuthService,private toastr: ToastrService) {
  }

  ngOnInit(): void {
    

  }
  submitForm() {
    this.submitted=true
    if (this.loginForm?.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      this.loginUser()
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  loginUser() {

    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (res: ILoginResponse) => {
          if (res.message === 'Successful Login!')
          localStorage.setItem('accessToken', res?.token);
          this.router.navigate(['']);
        },
        error: (error: ILoginResponse) => {
          this.toastr.error("Provided credentials are incorrect, please try again.");
        
        }
      });
    }

}
