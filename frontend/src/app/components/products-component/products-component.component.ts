import { Component } from '@angular/core';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent {
  product: Products = new Products();
  products:Products[]=[];
  
}
