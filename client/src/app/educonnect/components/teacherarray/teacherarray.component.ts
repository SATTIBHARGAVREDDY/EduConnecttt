import { Component } from '@angular/core';
import { Teacher } from '../../models/Teacher';

@Component({
  selector: 'app-teacherarray',
  templateUrl: './teacherarray.component.html',
  styleUrls: ['./teacherarray.component.scss']
})
export class TeacherArrayComponent{
  showDetails:boolean=true;
  teachers:Teacher[]=[
    new Teacher(1,'Anand','9876543210','anand@mail.com','Math',5),
    new Teacher(2,'Ravi','9123456789','ravi@mail.com','Science',3)
  ];
  toggleDetails():void{
    this.showDetails=!this.showDetails;
  }
}
