import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  @Input() item = "This is default value from child component"; 
  @Input() itemDetails:{name:string,email:string} = {name:'',email:''};
  ngOnInit(): void {
  }


  title="Angular Classes"

}
