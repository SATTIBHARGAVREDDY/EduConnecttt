import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  role: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Get role (adjust if you store it differently)
    this.role = localStorage.getItem('role');
  }

  logout(): void {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userId');
      localStorage.removeItem('studentId');
      localStorage.removeItem('teacherId');
    } catch (_) {}
    // Navigate to login (fallback to home if route not found)
    this.router.navigate(['/auth/login']).catch(() => this.router.navigate(['/']));
  }
}