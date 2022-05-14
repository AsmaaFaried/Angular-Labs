import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentAddComponent,
    StudentDetailsComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[StudentAddComponent,StudentDetailsComponent,StudentListComponent]
})
export class StudentModule { }
