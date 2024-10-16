import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/Products';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterProductService } from 'src/app/Services/register-product.service';

@Component({
  selector: 'app-cform-save',
  templateUrl: './cform-save.component.html',
  styleUrls: ['./cform-save.component.css']
})
export class CformSaveComponent {
  product: Products = new Products()
  constructor(private registerproductS: RegisterProductService,private router: Router) { }

  onSubmit() {
    console.log(this.product);
    this.registerproductS.RegisterProduct(this.product).subscribe({
      next: (response) => {

        console.log(response);


        if (response.status === 201) {
          alert('product registrado correctamente');
          this.router.navigate(['/getAllProducto']);
        } else {
          alert('Hubo un problema al registrar el product');
        }
      },
      error: (error) => {

        console.error('Error en la solicitud:', error);
        alert('Hubo un problema al procesar la solicitud');
      },
    });
  }
}
