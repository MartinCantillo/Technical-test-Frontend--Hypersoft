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
import { LogoutComponentComponent } from './components/logout-component/logout-component.component';
import { CHomeComponent } from './components/c-home/c-home.component';


const appRoutes: Routes = [
  { path: 'saveProducto',canActivate: [RoleGuard], data: { roles: ['Admin'] }, component: CformSaveComponent,  },
  { path: 'getAllProducto', component: ProductsComponentComponent, canActivate: [RoleGuard], data: { roles: ['User', 'Admin'] } },
  { path: 'registerUser', component: CregisterComponentComponent },
  { path: 'logginUser', component: CloginComponentComponent },
  { path: 'cHome', component: CHomeComponent },
  { path: 'logoutUser', component: LogoutComponentComponent },
  { path: '**', redirectTo: '/logginUser' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponentComponent,
    CformSaveComponent,
    CloginComponentComponent,
    CregisterComponentComponent,
    LogoutComponentComponent,
    CHomeComponent,

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
