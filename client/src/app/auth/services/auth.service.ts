// --------src/app/auth/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// FIX: use relative path instead of 'src/environments/environment'
import { environment } from '../../../environments/environment';

import { User } from '../../educonnect/models/User';
import { UserRegistrationDTO } from '../../educonnect/models/UserRegistrationDTO';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginUrl = environment?.apiUrl && environment.apiUrl.length > 0 ? environment.apiUrl : '';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) {}

  login(user: Partial<User>): Observable<{ [key: string]: string }> {
    return this.http.post<{ [key: string]: string }>(
      `${this.loginUrl}/user/login`,
      user,
      this.httpOptions
    );
    }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('teacher_id');
    localStorage.removeItem('student_id');
  }

  createUser(user: UserRegistrationDTO): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}/user/register`, user, this.httpOptions);
  }
}
