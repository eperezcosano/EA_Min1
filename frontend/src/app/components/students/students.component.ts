import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  studentsTel: Student[];
  studentsSys: Student[];
  studentsAer: Student[];

  async ngOnInit() {
    this.studentsTel = await this.studentService.getStudentsTel().toPromise();
    this.studentsSys = await this.studentService.getStudentsSys().toPromise();
    this.studentsAer = await this.studentService.getStudentsAer().toPromise();
  }

}
