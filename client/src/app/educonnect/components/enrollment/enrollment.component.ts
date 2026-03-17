import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent {
  enrollmentForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      studentId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      courseId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      enrollmentDate: ['', [Validators.required]]
    });
  }

  // IMPORTANT: With strict template type checking, this getter returns an index-signature map
  // so template must use f['controlName'] (bracket syntax), not f.controlName (dot syntax).
  get f() {
    return this.enrollmentForm.controls;
  }

  onSubmit(): void {
    this.successMessage = null;
    this.errorMessage = null;

    if (this.enrollmentForm.invalid) {
      this.errorMessage = 'Please correct the errors in the form.';
      return;
    }

    // Simulate success; in real app call service and handle Observable
    this.successMessage = 'Enrollment added successfully!';
  }

  resetForm(): void {
    this.enrollmentForm.reset();
    this.successMessage = null;
    this.errorMessage = null;
  }
}
