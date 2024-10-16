import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  private endpoint: string = "http://localhost:8020/api/getAll";
  private endpoint2: string = "http://localhost:8020/api/delete";
  private endpointUpdate: string = "http://localhost:8020/api/update";

  prdt: Products = new Products();

  constructor(private httpClient: HttpClient) { }

  GetAll(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.endpoint}`);
  }

  Delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.endpoint2}/${id}`);
  }

  Update(id: number, product: Products): Observable<any> {
    return this.httpClient.put<any>(`${this.endpointUpdate}/${id}`, product);
  }
}
