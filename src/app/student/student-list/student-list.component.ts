import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  stdlst:Student[]=[];

  constructor(public stdSer:StudentService,public router:Router) {

  }

  ngOnInit(): void {
    this.stdlst=this.stdSer.getAllStds();
  }

  addStd(){
    this.router.navigateByUrl("students/add");
  }

}
