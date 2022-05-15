import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public id:number=0;
  dept:Department | null=new Department(0,"","");
  constructor(public ac:ActivatedRoute,public deptSer:DepartmentService) { }

  ngOnInit(): void {
    this.dept=this.deptSer.getDept(this.ac.snapshot.params['id']);
    this.id=this.ac.snapshot.params['id'];
  }

}
