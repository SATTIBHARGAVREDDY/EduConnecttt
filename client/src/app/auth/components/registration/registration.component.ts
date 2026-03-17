import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  selectedRole: string | null = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]],
      role: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      yearsOfExperience: [''],
      dateOfBirth: [''],
      address: ['']
    });
  }

  onRoleChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedRole = value;
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.successMessage = null;
      this.errorMessage = 'Please fill out all fields correctly.';
      return;
    }
    this.authService.createUser(this.registrationForm.value).subscribe({
      next: () => {
        this.errorMessage = null;
        this.successMessage = 'Registration successful!';
        this.resetForm();
      },
      error: () => {
        this.successMessage = null;
        this.errorMessage = 'Please fill out all fields correctly.';
      }
    });
  }

  resetForm(): void {
    this.registrationForm.reset();
    this.selectedRole = null;
  }
}
