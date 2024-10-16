import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { CformSaveComponent } from './components/cform-save/cform-save.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'saveProducto', component: CformSaveComponent },
  { path: 'getAllProducto', component: ProductsComponentComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponentComponent,
    CformSaveComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
