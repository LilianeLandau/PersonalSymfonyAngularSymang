
// Créer un composant de bienvenue
// src/app/welcome/welcome.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-container">
      <h2>Bienvenue!</h2>
      <p>Vous êtes maintenant connecté.</p>
      <button class="btn btn-danger" (click)="logout()">
        Se déconnecter
      </button>
    </div>
  `,
  styles: [`
    .welcome-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      text-align: center;
    }
    .btn-danger {
      background-color: #dc3545;
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class WelcomeComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
