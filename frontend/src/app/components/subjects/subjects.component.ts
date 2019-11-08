import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {Subject} from "../../models/subject";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  subjects: Subject[] = [];

  async ngOnInit() {
    let tmp = await this.subjectService.getSubjects().toPromise();
    for (let i = 0; i < tmp.length; i++) {
      let subject:Subject = await this.subjectService.getStudentsFromSubject(tmp[i].name).toPromise();
      this.subjects.push(subject[0]);
    }
    console.log(this.subjects);
  }
}
