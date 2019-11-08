import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from "@angular/common/http";


import {ReactiveFormsModule} from "@angular/forms";
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,

    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
