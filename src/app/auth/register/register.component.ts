import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from 'src/app/components/services/auth.service';
import { IRegister, IRegisterResponse } from 'src/app/shared/interfaces/sign-up.interface';
import { ILoginResponse } from 'src/app/shared/interfaces/login.interface';
import { Router } from '@angular/router';
import { FitStarRegex } from 'src/app/shared/constants/login';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  confirmPasswordShow: boolean = false;
  passwordShow: boolean = false;
  terms: boolean = true;
  submitted:boolean=false;


  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.value.password;
    let confirmPass = group.value.confirmPassword;
    if (pass.length < 8) return { minLength: true };
    if (
      this.registerForm.controls['password']?.errors?.pattern ||
      this.registerForm.controls['confirmPassword']?.errors?.pattern
    )
      return { pattern: true };
    return pass === confirmPass ? null : { notSame: true };
  };

  registerForm: FormGroup = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('', {
      validators: [Validators.required, Validators.pattern(FitStarRegex.email)],
      updateOn: 'blur',
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
     
    }),
    role: new FormControl('',[Validators.required]),
    checkbtn: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  },
    {
      validators: this.checkPasswords,
    })


    get f(): { [key: string]: AbstractControl } {
      return this.registerForm.controls;
    }

  roles = [
    { id: "center", name: "Fitness Center", },
    { id: "model", name: "Fitness Model" },
    { id: "pro", name: "Fitness Professional" },
  ];



  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }
  password() {
    this.passwordShow = !this.passwordShow;
  }
  confirmPasswordToggle() {
    this.confirmPasswordShow = !this.confirmPasswordShow;
  }



  submit() {
this.submitted=true;
    if (this.registerForm.valid && this.terms) {
      let formValue = this.registerForm.value;
      delete formValue.confirmPassword;
      this.authService.signUp(formValue).subscribe((res: IRegisterResponse) => {
        if (res.status) {
          let formValue = this.registerForm.value;
          let body = { email: formValue.email, password: formValue.password }
          this.authService.login(body).subscribe((res: ILoginResponse) => {
            if (res.message === "Successful Login!") {
              localStorage.setItem('accessToken', res?.token);
              this.router.navigate(['']);
            }
          })
        }
      })
    }
    else {
      return
    }
  }




}
