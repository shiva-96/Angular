import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lecture44',
  templateUrl: './lecture44.component.html',
  styleUrls: ['./lecture44.component.css']
})
export class Lecture44Component implements OnInit {

  constructor(private route : ActivatedRoute) { }

  userId: any;
  
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("id");
    console.log(this.userId);

  }

}
