import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Environment} from "./environment.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Subject} from "../models/subject";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getSubjects(): Observable<Subject[]> {
    console.log(this.environment.urlSubject);
    return this.http.get<Subject[]>(this.environment.urlSubject);
  }

  getStudentsFromSubject(subject): Observable<Subject> {
    console.log(this.environment.urlSubject);
    return this.http.get<Subject>(this.environment.urlSubject+'/'+subject);
  }

}
