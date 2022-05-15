import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username="";
  email="";
  public user:User=new User(0,"","");
  constructor() { }

  ngOnInit(): void {
  }
  showRigister(user:any){

    console.log(user);
  }
  add(){
    console.log(this.user);
  }

}
