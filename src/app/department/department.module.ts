import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[DepartmentAddComponent,DepartmentDetailsComponent,DepartmentListComponent]
})
export class DepartmentModule { }
