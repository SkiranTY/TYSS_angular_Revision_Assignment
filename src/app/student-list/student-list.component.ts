import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { students } from '../students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentServiceService, private routes: Router) { this.getStudents(); }

  selectedStudent: students = {
    id: null,
    studentsName: null,
    age: null,
    marks: null,
    degree: null
  }

  studentArr : any[] = [];

  getStudents() {
    this.service.getStudentList().pipe(map(data => {
      let myArr: any[] = [];
      for (let key in data) {
        myArr.push({ ...data[key], id: key })
      }
      this.studentArr = myArr;
    })).subscribe(data => {
      console.log(this.studentArr);
    })
  }


  updateStudent(data : students) {
    this.selectedStudent = data;
  }
  ngOnInit() {
  }

}
