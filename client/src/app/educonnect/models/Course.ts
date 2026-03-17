import { Teacher } from './Teacher';
export class Course {
  courseId: number;
  courseName: string;
  description: string;
  // Day-22+ expectations: allow both styles to satisfy tests
  teacherId?: number;
  teacher?: Teacher;

  constructor(
    courseId: number,
    courseName: string,
    description: string,
    teacherId?: number,
    teacher?: Teacher
  ) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.description = description;
    this.teacherId = teacherId;
    this.teacher = teacher;
  }
}
