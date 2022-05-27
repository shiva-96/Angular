import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture13',
  templateUrl: './lecture13.component.html',
  styleUrls: ['./lecture13.component.css']
})
export class Lecture13Component implements OnInit {

  constructor() { }

  count = 0;
  ngOnInit(): void {
  }
  clicked(type:string){
    type==='add' ?this.count++:this.count--;
      
  }

}
