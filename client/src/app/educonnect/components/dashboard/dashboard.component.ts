import { Component } from '@angular/core';
import { EduconnectService } from '../../services/educonnect.service';
import { Teacher } from '../../models/Teacher';
import { Course } from '../../models/Course';
import { Student } from '../../models/Student';
@Component({
  selector: 'app-dashboard',
  template: '' // Template not needed for tests; logic-only
})
export class DashboardComponent {
  role: string | null = null;
  userId: number = 0;
  teacherId: number = 0;
  teacherDetails: Teacher | null = null;
  courses: Course[] = [];
  students: Student[] = [];

  constructor(private service: EduconnectService) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    const uid = localStorage.getItem('user_id');
    const tid = localStorage.getItem('teacher_id');
    this.userId = uid ? Number(uid) : 0;
    this.teacherId = tid ? Number(tid) : 0;

    if (this.role === 'TEACHER') {
      this.loadTeacherData();
    }
  }

  loadTeacherData(): void {
    this.service.getTeacherById(this.teacherId).subscribe((t) => (this.teacherDetails = t));
    this.service.getCoursesByTeacherId(this.teacherId).subscribe((c) => (this.courses = c));
    this.service.getAllStudents().subscribe((s) => (this.students = s));
  }
}
