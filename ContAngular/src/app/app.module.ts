import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lecture44Component } from './lecture44/lecture44.component';
import { ModuleexampleModule } from './moduleexample/moduleexample.module';
import { InputOutputDecoratorComponent } from './input-output-decorator/input-output-decorator.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    Lecture44Component,
    InputOutputDecoratorComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleexampleModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
