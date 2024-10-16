import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/Products';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cform-save',
  templateUrl: './cform-save.component.html',
  styleUrls: ['./cform-save.component.css']
})
export class CformSaveComponent {
  product: Products = new Products()
 // constructor(private _SContactService: SContactService,private router: Router) { }

  onSubmit() {
    console.log(this.product);
   /* this._SContactService.SaveUser(this.product).subscribe({
      next: (res) =>this.router.navigate(['/Home']),
      error: (error) => {
        console.log(error);
      },
    });
  **/}
}
