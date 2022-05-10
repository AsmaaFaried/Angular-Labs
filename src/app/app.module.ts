import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { RedtieComponent } from './redtie/redtie.component';
import { ContentComponent } from './content/content.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DepartmentComponent,
    RedtieComponent,
    ContentComponent

  ],
  imports: [
    BrowserModule,CoreModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
