import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    address:['',[Validators.required]],
    dob:['',[Validators.required]],
    gender:['',[Validators.required]]
  })


  saveForm(){
    localStorage.setItem('testObject', JSON.stringify(this.profileForm.value));
    console.warn("Form Data is :-- ",this.profileForm.value)
    
    var data = localStorage.getItem('testObject')
    
  }

}
