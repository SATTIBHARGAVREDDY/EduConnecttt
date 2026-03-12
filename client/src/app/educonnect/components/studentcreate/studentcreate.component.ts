import { Component } from '@angular/core';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html'
})
export class StudentCreateComponent {
  student = new Student(0, '', null, '', '', '');
  successMessage: string | null = null;
  errorMessage: string | null = null;

  onSubmit(): void {
    const valid = !!(this.student.fullName && this.student.email);

    if (valid) {
      console.log(
        `Student{studentId: ${this.student.studentId}, fullName: '${this.student.fullName}', dateOfBirth: ${this.student.dateOfBirth}, contactNumber: '${this.student.contactNumber}', email: '${this.student.email}', address: '${this.student.address}'}`
      );

      // EXACT TEXT EXPECTED BY THE TESTS
      this.successMessage = 'Student created successfully!';
      this.errorMessage = null;
    } else {
      // EXACT TEXT EXPECTED BY THE TESTS
      this.errorMessage = 'Please fill in all required fields.';
      this.successMessage = null;
    }
  }

  resetForm(): void {
    this.student = new Student(0, '', null, '', '', '');
    this.successMessage = null;
    this.errorMessage = null;
  }
}