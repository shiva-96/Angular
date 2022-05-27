import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Lecture13Component } from './lecture13/lecture13.component';
import { Lecture15Component } from './lecture15/lecture15.component';
import { Lecture16Component } from './lecture16/lecture16.component';
import { Lecture18Component } from './lecture18/lecture18.component';
import { Lecture23Component } from './lecture23/lecture23.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { UsdInrPipe } from './PipeFolder/usd-inr.pipe';
import { Lecture38Component } from './lecture38/lecture38.component';
import { Lecture40Component } from './lecture40/lecture40.component';
import { RedEleDirective } from './DirectiveFolder/red-ele.directive';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { ErrorWildCardComponent } from './error-wild-card/error-wild-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Lecture13Component,
    Lecture15Component,
    Lecture16Component,
    Lecture18Component,
    Lecture23Component,
    ChildComponentComponent,
    UsdInrPipe,
    Lecture38Component,
    Lecture40Component,
    RedEleDirective,
    DynamicRoutingComponent,
    ErrorWildCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
