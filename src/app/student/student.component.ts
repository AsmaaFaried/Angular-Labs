import { Component } from "@angular/core";
import { Student } from "../_models/student";

@Component({
  selector:"app-student",
  templateUrl:"./student.component.html",
  styleUrls:["./student.component.css"]
})

export class StudentComponent{

  // data

  stdName="Asmaa";

  std:Student=new Student(1,"asmaa",23,1);
  nstd:Student=new Student(0,"",0,0);

  stds:Student[]=[
    new Student(2,"monica",24,2),
    new Student(3,"hader",27,3),
    new Student(4,"ali",20,4)
  ];

  // operation functions
  constructor(){
    // this.stdName="asmaa";
  }

  add(){
    this.stds.push(new Student(this.nstd.id,this.nstd.name,this.nstd.age,this.nstd.deptno));
    this.nstd=new Student(0,"",0,0);

  }

  show(stdId:number){
    for(let i=0;i<this.stds.length;i++){
      if(this.stds[i].id==stdId){
        this.nstd=this.stds[i];
        break;
      }
    }
  }
  remove(stdId:number){
    for(let i=0;i<this.stds.length;i++){
      if(this.stds[i].id==stdId){
        // this.nstd=this.stds[i];
        this.stds.splice(i,1);
        break;
      }
    }
  }
}
