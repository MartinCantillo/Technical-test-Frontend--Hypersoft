import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllProductsService } from 'src/app/Services/get-all-products.service';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-c-edit',
  templateUrl: './c-edit.component.html',
  styleUrls: ['./c-edit.component.css']
})
export class CEditComponent {
  product: Products = new Products();

  constructor(private getAllProductsService: GetAllProductsService, private router: Router) {
    this.product = this.getAllProductsService.prdt;
  }


  onSubmit() {
    if (this.product.id && this.product.name && this.product.price && this.product.quantity >= 0) {
      this.getAllProductsService.Update(this.product.id, this.product).subscribe({
        next: (response) => {
          console.log('Producto actualizado correctamente', response);
          this.router.navigate(['/getAllProducto']);  // Redirige a la lista de productos después de la actualización
        },
        error: (error) => {
          console.error('Error al actualizar el producto', error);
        }
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
