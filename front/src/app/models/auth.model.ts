//Créer un modèle pour l'authentification
// src/app/models/auth.model.ts
export interface LoginRequest{
  username : string;
  password : string;
}
export interface LoginResponse{
  token : string;
}
