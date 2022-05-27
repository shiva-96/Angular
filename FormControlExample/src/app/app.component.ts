import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormControlExample';
  constructor(private router: Router) { }

  openChildComponent(){
    this.router.navigateByUrl('/childComponent');   
    
  }
}
