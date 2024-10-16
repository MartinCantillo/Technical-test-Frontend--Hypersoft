import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private tokenKey = 'token';

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRoles(): string[] {
    const token = this.getToken();
    if (!token) return [];
    const decodedToken: any = jwtDecode(token);
    return decodedToken.roles || [];
  }

  hasRole(role: string): boolean {
    const roles = this.getRoles();
    return roles.includes(role);
  }

  hasAnyRole(roles: string[]): boolean {

    const userRoles = this.getRoles();
    return roles.some(role => userRoles.includes(role));
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const decodedToken: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
