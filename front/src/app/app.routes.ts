
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent }
];
