import { Student } from './Student';
import { Course } from './Course';

export class Enrollment {
  enrollmentId: number;
  student: Student;
  course: Course;
  enrollmentDate: Date;

  // Optional so test object literals are assignable
  logAttributes?: () => void;

  constructor(
    enrollmentId: number,
    student: Student,
    course: Course,
    enrollmentDate: Date
  ) {
    this.enrollmentId = enrollmentId;
    this.student = student;
    this.course = course;
    this.enrollmentDate = enrollmentDate;

    this.logAttributes = () => {
      console.log({
        enrollmentId: this.enrollmentId,
        student: this.student,
        course: this.course,
        enrollmentDate: this.enrollmentDate
      });
    };
  }
}