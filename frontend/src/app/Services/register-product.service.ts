import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class RegisterProductService {

  private endpoint: string = "http://localhost:8020/api/addProduct";
  constructor(private httpClient :HttpClient ) { }

  public RegisterProduct(product: Products): Observable<HttpResponse<Object>> {
    return this.httpClient.post<Object>(this.endpoint, product, { observe: 'response' });
  }
}
