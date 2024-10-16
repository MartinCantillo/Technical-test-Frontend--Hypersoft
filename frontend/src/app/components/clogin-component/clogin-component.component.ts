import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LogginServiceService } from 'src/app/Services/loggin-service.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-clogin-component',
  templateUrl: './clogin-component.component.html',
  styleUrls: ['./clogin-component.component.css']
})
export class CloginComponentComponent {
  user: User = new User();

  constructor(
    private loginService: LogginServiceService,
    private authService: AuthServiceService,
    private router: Router
  ) { }

  login() {
    this.loginService.login(this.user).subscribe({
      next: (token: string) => {
        console.log(token);
        this.authService.saveToken(token);


        if (this.authService.isAuthenticated()) {
          const roles = this.authService.getRoles();
          console.log(roles);

          if (roles.includes('Admin')) {
            this.router.navigate(['/saveProducto']);
          } else if (roles.includes('User')) {
            this.router.navigate(['/getAllProducto']);
          } else {
            this.router.navigate(['/logginUser']);
          }
        } else {
          alert("Authentication failed.");
          this.router.navigate(['/logginUser']);
        }
      },
      error: (error) => {
        console.log("Error: " + JSON.stringify(error));
        alert("User not found");
      }
    });
  }
}
