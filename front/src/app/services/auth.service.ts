// Créer un service d'authentification
// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/auth.model';

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

constructor(private http: HttpClient) {
  //vérifier si un token existe au démarrage de l'application
const token = localStorage.getItem('token');
this.isAuthenticatedSubject.next(!!token);
}
login(credentials: LoginRequest): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
  .pipe(tap((response) => {
    if(response.token){
    localStorage.setItem('token', response.token);
    this.isAuthenticatedSubject.next(true);
    }
  }));
}
logout(): void {
  localStorage.removeItem('token');
  this.isAuthenticatedSubject.next(false);
}

isAuthenticated(): boolean {
  return this.isAuthenticatedSubject.value;
}
}
