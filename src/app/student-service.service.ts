import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  Url = 'https://angular-http-7721b.firebaseio.com';

  constructor(private http:HttpClient) { this.getStudentList(); }

  addStudents(students){
    return this.http.post<any>(`${this.Url}/students.json`,students);
  }

  getStudentList(){
    return this.http.get<any>(`${this.Url}/students.json`);
  }

  deleteStudent(student : students){
    return this.http.delete<any>(`${this.Url}/students/${student.id}.json`).subscribe(data=>{
      console.log("data deleted");
    })
  }

  updateStudent(form : NgForm){
    return this.http.put<any>(`${this.Url}/students/${form.value.id}.josn`,form.value);
  }
}
