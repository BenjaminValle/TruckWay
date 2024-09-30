import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  ResetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.ResetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

   passwordValidator(control: AbstractControl) {
    const password = control.value;

    if (!password) {
      return {passwordInvalid: true};
    }

    const hasNumber = /\d{4}/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]{3}/.test(password);

    const valid = hasNumber && hasUppercase && hasSpecialChars;

    if (!valid) {
      return {passwordInvalid: true};
    }

    return null;
  }

  ResetPassword() {
    if (this.ResetPasswordForm.valid) {

    } else {

    }
  }

  ngOnInit() {
    
  }

  


}
