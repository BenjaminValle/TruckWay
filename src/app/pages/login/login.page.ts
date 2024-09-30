import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, this.passwordValidator]]
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

  login() {
    if (this.loginForm.valid) {

    } else {

    }
  }

  ngOnInit() {
    
  }

  


}

 