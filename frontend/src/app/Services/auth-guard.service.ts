import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const roles = next.data['roles'];

    if (this.authService.isAuthenticated() && this.authService.hasAnyRole(roles)) {
      return true;
    }


    this.router.navigate(['/logginUser']);
    return false;
  }
}
