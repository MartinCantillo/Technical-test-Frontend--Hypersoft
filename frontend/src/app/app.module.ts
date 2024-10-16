import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { CformSaveComponent } from './components/cform-save/cform-save.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CloginComponentComponent } from './components/clogin-component/clogin-component.component';
import { CregisterComponentComponent } from './components/cregister-component/cregister-component.component';
import { RoleGuard } from './Services/auth-guard.service';
import { AuthInterceptorService } from './Services/auth-interceptor.service';


const appRoutes: Routes = [
  { path: 'saveProducto', component: CformSaveComponent, canActivate: [RoleGuard], data: { roles: ['Admin'] } },
  { path: 'getAllProducto', component: ProductsComponentComponent, canActivate: [RoleGuard], data: { roles: ['User', 'Admin'] } },
  { path: 'registerUser', component: CregisterComponentComponent },
  { path: 'logginUser', component: CloginComponentComponent },
  { path: '**', redirectTo: '/logginUser' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponentComponent,
    CformSaveComponent,
    CloginComponentComponent,
    CregisterComponentComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
