import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentCreateComponent } from './components/studentcreate/studentcreate.component';
import { TeacherCreateComponent } from './components/teachercreate/teachercreate.component';
import { CourseCreateComponent } from './components/coursecreate/coursecreate.component';
import { TeacherArrayComponent } from './components/teacherarray/teacherarray.component';

@NgModule({
  declarations:[
    StudentCreateComponent,
    TeacherCreateComponent,
    CourseCreateComponent,
    TeacherArrayComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EduconnectModule{}