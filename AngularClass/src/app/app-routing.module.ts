import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { ErrorWildCardComponent } from './error-wild-card/error-wild-card.component';
import { Lecture13Component } from './lecture13/lecture13.component';


const routes: Routes = [
  { path: "dRout/:id", component: DynamicRoutingComponent },
  { path: "lec13", component: Lecture13Component },
  { path:"**", component:ErrorWildCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
