import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coursecreate',
  templateUrl: './coursecreate.component.html'
})
export class CourseCreateComponent {
  courseForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      courseId: [0, Validators.required],
      courseName: ['', Validators.required],
      description: ['', [Validators.maxLength(500)]],
      teacherId: [null, Validators.required] // default must be null per spec
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      // EXACT string expected by the spec (note the exclamation)
      this.successMessage = 'Course created successfully!';
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Invalid course';
      this.successMessage = null;
    }
  }

  resetForm(): void {
    this.courseForm.reset({
      courseId: 0,
      courseName: '',
      description: '',
      teacherId: null
    });
    this.successMessage = null;
    this.errorMessage = null;
  }
}