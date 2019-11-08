import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject";
import {Student} from "../../models/student";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  subjects: Subject[];
  students: Student[];

  async ngOnInit() {
    this.subjects = await this.subjectService.getSubjects().toPromise();
  }

  async getStudentsFromSubj(subject) {
    this.students = await this.subjectService.getStudentsFromSubject(subject).toPromise();
  }

}
