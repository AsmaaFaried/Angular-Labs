import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  ndept:Department=new Department(0,"","",0);
  depts:Department[]=[
    new Department(1,"Os","Alex",1),
    new Department(2,"Mobile","Cairo",2),
    new Department(3,"BD","Tanta",3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.depts.push(new Department(this.ndept.id,this.ndept.name,this.ndept.location,this.ndept.rate));
    this.ndept=new Department(0,"","",1);

  }

  show(deptId:number){
    for(let i=0;i<this.depts.length;i++){
      if(this.depts[i].id==deptId){
        this.ndept=this.depts[i];
        break;
      }
    }
  }

  remove(deptId:number){
    for(let i=0;i<this.depts.length;i++){
      if(this.depts[i].id==deptId){
        this.depts.splice(i,1);
        break;
      }
    }
  }

}
