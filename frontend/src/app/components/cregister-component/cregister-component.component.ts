import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { RegisterServiceService } from 'src/app/Services/register-service.service';

@Component({
  selector: 'app-cregister-component',
  templateUrl: './cregister-component.component.html',
  styleUrls: ['./cregister-component.component.css']
})
export class CregisterComponentComponent {
  user: User = new User();

  constructor(
    private registerUserService: RegisterServiceService,
    private router: Router
  ) { }

  onSubmit() {
    this.registerUserService.RegisterUser(this.user).subscribe({
      next: (response) => {

        console.log(response);


        if (response.status === 201) {
          alert('Usuario registrado correctamente');
          this.router.navigate(['/logginUser']);
        } else {
          alert('Hubo un problema al registrar el usuario');
        }
      },
      error: (error) => {

        console.error('Error en la solicitud:', error);
        alert('Hubo un problema al procesar la solicitud');
      },
    });
  }
}
