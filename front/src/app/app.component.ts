
// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <h1>Gestion des Utilisateurs</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
  `]
})
export class AppComponent {}
