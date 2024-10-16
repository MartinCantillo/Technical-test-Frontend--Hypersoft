import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/Products';
import { GetAllProductsService } from 'src/app/Services/get-all-products.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent {
  product: Products = new Products();
  products: Products[] = [];
  constructor(private productService: GetAllProductsService, private router: Router) { this.loadProducts() }

  loadProducts() {
    this.productService.GetAll().subscribe(
      (data) => {
        this.products = data;
      }
    )
  }
  onDelete(id: number) {
    if (confirm('¿Are you sure?')) {
      this.productService.Delete(id).subscribe({
        next: () => {
          console.log('Contact deleted successfully');
          this.loadProducts();
        },

        error: (error) => {
          console.log(error);
        },
      }
      );


    }

  }
}
