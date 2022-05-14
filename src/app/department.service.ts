import { Injectable } from '@angular/core';

import { Department } from "./_models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private depts:Department[]=[
    new Department(1,"Os","alex"),
    new Department(2,"BI","mansoura"),
    new Department(3,"PD","smart"),
  ];
  constructor() {

   }
  getAllDepts(){
    return this.depts;
  }
  addDept(dept:Department){
    this.depts.push(new Department(dept._id,dept.name,dept.location));
  }
  getDept(id:number){
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i]._id==id){
        return this.depts[i];
      }
    }
    return null;
  }
}
