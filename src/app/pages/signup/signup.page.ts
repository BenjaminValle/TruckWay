import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutheticaService } from 'src/app/authetica.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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

  registro() {
    if (this.signupForm.valid) {

    } else {

    }
  }

  ngOnInit() {
    
  }

  


}
