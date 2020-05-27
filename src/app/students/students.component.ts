import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private service : StudentServiceService,private router:Router) { }

  
  message;
  
  submit(studentForm: NgForm) {
    this.service.addStudents(studentForm.value).subscribe(data=>{
      console.log(data);
      studentForm.reset();
    },err=>{
      console.log(err);
    },()=>{
      setTimeout(()=>{
        this.message ="Students data Submitted SuccessFully"
      },1000);
    })
    setTimeout(()=>{
      this.router.navigateByUrl('/student-list');
    },7000);
  }

  ngOnInit() {
  }
}
