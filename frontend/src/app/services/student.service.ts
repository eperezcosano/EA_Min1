import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Environment} from "./environment.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getStudentsTel(): Observable<Student[]>{
    console.log(this.environment.urlStudent);
    return this.http.get<Student[]>(this.environment.urlStudent+'/telematics');
  }

  getStudentsSys(): Observable<Student[]>{
    console.log(this.environment.urlStudent);
    return this.http.get<Student[]>(this.environment.urlStudent+'/systems');
  }

  getStudentsAer(): Observable<Student[]>{
    console.log(this.environment.urlStudent);
    return this.http.get<Student[]>(this.environment.urlStudent+'/aeros');
  }

}
