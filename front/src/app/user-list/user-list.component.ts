
// src/app/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="container">
      <h3 class="text-center">Liste des utilisateurs</h3>

      @if (error) {
        <div class="alert alert-danger">
          {{ error }}
        </div>
      }

      @if (loading) {
        <div class="text-center">
          Chargement...
        </div>
      }

      @if (users.length > 0) {
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Rôles</th>
            </tr>
          </thead>
          <tbody>
            @for (user of users; track user.id) {
              <tr>
                <td>{{ user.email }}</td>
                <td>{{ user.roles.join(', ') }}</td>
              </tr>
            }
          </tbody>
        </table>
      } @else {
        <div class="text-center">
          Aucun utilisateur trouvé
        </div>
      }
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .table {
      margin-top: 20px;
    }
    .alert {
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .alert-danger {
      background-color: #f8d7da;
      border-color: #f5c6cb;
      color: #721c24;
    }
  `]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = '';

    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response.member;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des utilisateurs';
        this.loading = false;
        console.error('Erreur:', err);
      }
    });
  }
}
