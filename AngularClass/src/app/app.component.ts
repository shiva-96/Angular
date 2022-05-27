import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Step By Step';

  displayVal: string = "";
  displayVal2 ="";
  getData() {
    var data: any = document.getElementById("inputValue") as HTMLInputElement ;
    this.displayVal = data.value;
    console.log(this.displayVal)
  }

  getData2(val:string){
    this.displayVal2 = val;
  }

  // getData3(val:string){
  //   this.displayVal2 = val;
  // }


  parentVariable = "This is from parent Component";
  greet(){
    alert("Hello Shiva");
  }

  userDetails=[
    {name:"Shiva", email:"shiva@gmail.com"},
    {name:"ravi", email:"ravi@gmail.com"},
    {name:"sumit", emial:"sumit@gmail.com"}
  ]



}
