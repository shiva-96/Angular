import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-lecture40',
  templateUrl: './lecture40.component.html',
  styleUrls: ['./lecture40.component.css']
})
export class Lecture40Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),  // Validators.email another validator for validation in email address
    password: new FormControl('', [Validators.required,Validators.minLength(4)]),
  })

  userLogin() {
    console.warn(this.loginForm.value);

  }

  get userValidator(){
    return this.loginForm.get('user')
  }

  get passwordValidator(){
    return this.loginForm.get('password')
  }
}
