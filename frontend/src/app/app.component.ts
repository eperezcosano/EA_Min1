import {Component, OnInit} from '@angular/core';
//import {Subject} from "/models/subject";
//import {SubjectService} from "../../services/subject.service";
import {Student} from "./models/student";
import {StudentService} from "./services/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

}
