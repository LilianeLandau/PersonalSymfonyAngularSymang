// src/app/models/user.model.ts
export interface User {
  id: number;
  email: string;
  roles: string[];
  userIdentifier: string;
}

export interface ApiResponse {
  '@context': string;
  '@id': string;
  '@type': string;
  totalItems: number;
  member: User[];
}
