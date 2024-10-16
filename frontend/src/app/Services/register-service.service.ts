import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  private endpoint: string = "http://localhost:8020/user/register";
  constructor(private httpclient: HttpClient) { }

   public RegisterUser(user: User): Observable<HttpResponse<Object>> {
    return this.httpclient.post<Object>(this.endpoint, user, { observe: 'response' });
  }
}
