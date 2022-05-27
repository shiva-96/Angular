import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture38',
  templateUrl: './lecture38.component.html',
  styleUrls: ['./lecture38.component.css']
})
export class Lecture38Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  userLogin(task:any){
    console.log(task);
    
  }

}
