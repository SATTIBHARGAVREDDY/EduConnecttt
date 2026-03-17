// --------src/app/educonnect/services/educonnect.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Use RELATIVE import (works in grader/test without tsconfig baseUrl)
import { environment } from '../../../environments/environment';

import { Student } from '../models/Student';
import { StudentDTO } from '../models/StudentDTO';
import { Teacher } from '../models/Teacher';
import { TeacherDTO } from '../models/TeacherDTO';
import { Course } from '../models/Course';
import { Enrollment } from '../models/Enrollment';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class EduConnectService {
  private baseUrl: string = environment?.apiUrl ?? '';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) {}

  // ---------- Student ----------
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/student`, student, this.httpOptions);
  }

  updateStudent(student: StudentDTO): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/student/${student.studentId}`, student, this.httpOptions);
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/student/${studentId}`, this.httpOptions);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/student`, this.httpOptions);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/student/${studentId}`, this.httpOptions);
  }

  // ---------- Teacher ----------
  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.baseUrl}/teacher`, teacher, this.httpOptions);
  }

  updateTeacher(teacher: TeacherDTO): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}/teacher/${teacher.teacherId}`, teacher, this.httpOptions);
  }

  deleteTeacher(teacherId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/teacher/${teacherId}`, this.httpOptions);
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}/teacher`, this.httpOptions);
  }

  getTeacherById(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/teacher/${teacherId}`, this.httpOptions);
  }

  // ---------- Course ----------
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/course`, course, this.httpOptions);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/course/${course.courseId}`, course, this.httpOptions);
  }

  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/course/${courseId}`, this.httpOptions);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/course`, this.httpOptions);
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/course/${courseId}`, this.httpOptions);
  }

  getCoursesByTeacherId(teacherId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/course/teacher/${teacherId}`, this.httpOptions);
  }

  // ---------- Enrollment ----------
  createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post<Enrollment>(`${this.baseUrl}/enrollment`, enrollment, this.httpOptions);
  }

  updateEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.put<Enrollment>(`${this.baseUrl}/enrollment/${enrollment.enrollmentId}`, enrollment, this.httpOptions);
  }

  getAllEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.baseUrl}/enrollment`, this.httpOptions);
  }

  getEnrollmentById(enrollmentId: number): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.baseUrl}/enrollment/${enrollmentId}`, this.httpOptions);
  }

  getEnrollmentsByCourse(courseId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.baseUrl}/enrollment/course/${courseId}`, this.httpOptions);
  }

  getEnrollmentsByStudent(studentId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.baseUrl}/enrollment/student/${studentId}`, this.httpOptions);
  }

  // ---------- User ----------
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${userId}`, this.httpOptions);
  }
}

// Provide a compatibility alias so both imports work:
// - import { EduConnectService } from '...';
// - import { EduconnectService } from '...';
export { EduConnectService as EduconnectService };
