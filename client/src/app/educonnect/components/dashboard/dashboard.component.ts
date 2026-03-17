import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { Course } from '../../models/Course';
import { Enrollment } from '../../models/Enrollment';
import { EduconnectService } from '../../services/educonnect.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Older teacher-side state kept for compatibility
  students: Student[] = [];

  // Day-24 student state
  studentId: number = 0;
  studentDetails?: Student;
  enrollments: Enrollment[] = [];
  courses: Course[] = [];

  // Day-25 teacher state expected by specs
  teacherId: number = 0;

  constructor(private educonnectService: EduconnectService) {}

  ngOnInit(): void {
    if (!this.studentId) {
      const idFromStorage = Number(localStorage.getItem('studentId') || '0');
      if (idFromStorage > 0) this.studentId = idFromStorage;
    }
    if (this.studentId > 0) {
      this.loadStudentData();
    }
  }

  // ===== Day-24 student data =====
  loadStudentData(): void {
    if (this.studentId > 0) {
      this.educonnectService.getEnrollmentsByStudent(this.studentId).subscribe({
        next: (enrs) => (this.enrollments = enrs || []),
        error: () => (this.enrollments = [])
      });

      this.educonnectService.getAllCourses().subscribe({
        next: (cs) => (this.courses = cs || []),
        error: () => (this.courses = [])
      });
    }

    this.educonnectService.getStudentById(this.studentId).subscribe({
      next: (student) => {
        this.studentDetails = student;
      },
      error: () => {
        this.studentDetails = undefined;
      }
    });
  }

  // ===== Day-25 actions expected in tests =====
  deleteTeacher(): void {
    // The spec sets component.teacherId before calling this
    this.educonnectService.deleteTeacher(this.teacherId).subscribe({
      next: () => {},
      error: () => {}
    });
  }

  deleteCourse(courseId: number): void {
    this.educonnectService.deleteCourse(courseId).subscribe({
      next: () => {},
      error: () => {}
    });
  }
}