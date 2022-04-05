import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FitStarRegex } from 'src/app/shared/constants/login';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  submitted:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  ForgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.pattern(FitStarRegex.email)],
      updateOn: 'blur',
    }),

  })
  get f() {
    return this.ForgetPasswordForm?.controls;
  }
  submitForm() {
    this.submitted=true;
    if (this.ForgetPasswordForm?.invalid) {
      return;
    }
    if (this.ForgetPasswordForm.valid) {
     this.ForgetPassword()
    }
  }
  ForgetPassword() {
    console.log(this.ForgetPasswordForm.value)
  }
}
