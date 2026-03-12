import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../../models/Teacher';

@Component({
  selector: 'app-teachercreate',
  templateUrl: './teachercreate.component.html'
})
export class TeacherCreateComponent {
  teacherForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      teacherId: [0, Validators.required],
      fullName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      yearsOfExperience: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      const teacher = this.teacherForm.value as Teacher;
      console.log(teacher);
      // EXACT string expected by the spec (note the exclamation)
      this.successMessage = 'Teacher created successfully!';
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Invalid form';
      this.successMessage = null;
    }
  }

  resetForm(): void {
    this.teacherForm.reset({
      teacherId: 0,
      fullName: '',
      contactNumber: '',
      email: '',
      subject: '',
      yearsOfExperience: 0
    });
    this.successMessage = null;
    this.errorMessage = null;
  }
}