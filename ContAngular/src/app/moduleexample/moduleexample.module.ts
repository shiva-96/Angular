import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignupComponent,
    LogoutComponent
  ]
})
export class ModuleexampleModule { }
