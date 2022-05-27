import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PreloadAllModules } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing',
  templateUrl: './dynamic-routing.component.html',
  styleUrls: ['./dynamic-routing.component.css']
})
export class DynamicRoutingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  userId: any;
  ngOnInit(): void {
    // preloadingStrategy: PreloadAllModules
    console.log(this.route.snapshot.paramMap.get("id"));
    console.log("hjbfiehdbvich===>")

    this.userId = this.route.snapshot.paramMap.get("id");
    console.log(this.userId);

  }



}
