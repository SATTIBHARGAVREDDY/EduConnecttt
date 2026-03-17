import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // alias required by some tests
  userForm!: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]]
    });
    this.userForm = this.loginForm;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.successMessage = null;
      this.errorMessage = 'Please fill out all fields correctly.';
      return;
    }
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (res) => {
        if (res) {
          if (res['token']) localStorage.setItem('token', res['token']);
          if (res['role']) localStorage.setItem('role', res['role']);
          if (res['user_id']) localStorage.setItem('user_id', res['user_id']);
          if (res['teacher_id']) localStorage.setItem('teacher_id', res['teacher_id']);
          if (res['student_id']) localStorage.setItem('student_id', res['student_id']);
        }
        this.errorMessage = null;
        this.successMessage = 'Login successful!';
      },
      error: () => {
        this.successMessage = null;
        this.errorMessage = 'Please fill out all fields correctly.';
      }
    });
  }
}
