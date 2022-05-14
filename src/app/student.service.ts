import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private stds:Student[]=[
    new Student(1,"asmaa",1),
    new Student(2,"faried",2),
    new Student(3,"John",3),
  ];
  constructor() { }
  getAllStds(){
    return this.stds;
  }
  addStd(std:Student){
    this.stds.push(new Student(std.id,std.name,std.deptno));
  }
  getStd(id:number){
    for (let i = 0; i < this.stds.length; i++) {
      if(this.stds[i].id==id){
        return this.stds[i];
      }
    }
    return null;
  }
}
