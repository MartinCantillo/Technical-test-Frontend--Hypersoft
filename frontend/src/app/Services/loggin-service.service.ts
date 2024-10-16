import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LogginServiceService {


  private endpoint: string = "http://localhost:8020/user/login";
  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<string> {
    return this.httpClient.post(this.endpoint, user, { responseType: 'text' });
  }
}
