import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthServiceService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();
    console.log("Token enviado:", token);


    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'  // Asegurándote de incluir el Content-Type adecuado
        }

      });
    }


    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Mostrar el código de estado y el mensaje de error
        console.error('Error HTTP:', error.status, error.message);
        return throwError(error);
      })
    );
  }
}
