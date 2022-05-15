import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {


  ndept:Department=new Department(0,"","");
  save(){
    this.deptSer.addDept(this.ndept);
    this.router.navigateByUrl("/departments");
  }
  constructor(public deptSer:DepartmentService,public router:Router) {

   }

  ngOnInit(): void {
  }

}
