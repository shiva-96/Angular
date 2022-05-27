import { Directive, ElementRef } from '@angular/core';

// Directive are like  we can eruse them any where in the code like attribute in tags for 
//  eg:-- i had written appRedEle in the head tag in app.component.html



@Directive({
  selector: '[appRedEle]'
})
export class RedEleDirective {

  constructor(e: ElementRef) {
    e.nativeElement.style.color='green'

  }

}
