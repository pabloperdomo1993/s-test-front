import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { env } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Auth client.
   */
  public authClient(body: any): Observable<string> {
    return this.httpClient.post<any>(`${ env.api }/auth`, body);
  }
}
