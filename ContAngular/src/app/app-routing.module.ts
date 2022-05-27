import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lecture44Component } from './lecture44/lecture44.component';
import { LogoutComponent } from './moduleexample/logout/logout.component';
import { SignupComponent } from './moduleexample/signup/signup.component';

const routes: Routes = [
  {path:'lec44/:id', component:Lecture44Component},
  { path:'signup', component:SignupComponent},
  { path:'logout', component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
