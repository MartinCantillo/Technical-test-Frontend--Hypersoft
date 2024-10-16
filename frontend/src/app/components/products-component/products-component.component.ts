import { Component } from '@angular/core';
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
  constructor(private productService: GetAllProductsService) { this.loadProducts() }

  loadProducts() {
    this.productService.GetAll().subscribe(
      (data) => {
        this.products = data;
      }
    )
  }
}
