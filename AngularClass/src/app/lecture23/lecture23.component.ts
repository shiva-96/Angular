import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-lecture23',
  templateUrl: './lecture23.component.html',
  styleUrls: ['./lecture23.component.css']
})
export class Lecture23Component implements OnInit {

  constructor() { }

  userData:any = {}
  ngOnInit(): void {
  }

  data:string[]= ["he","she"];

  getData(data:NgForm){
    console.warn(data);
    this.userData = data;
    
  }

  getType(type:[]){
    return this.data
  }

  getObjectType(data:{}){
    return {"name":"shiv", "phone":454}
  }

}
