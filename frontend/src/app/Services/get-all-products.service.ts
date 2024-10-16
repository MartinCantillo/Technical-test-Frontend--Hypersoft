import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  private endpoint: string = "http://localhost:8020/api/getAll";
  constructor(private httpClient : HttpClient) { }

  GetAll(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.endpoint}`);
  }

}
