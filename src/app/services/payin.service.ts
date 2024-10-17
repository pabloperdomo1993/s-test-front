import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayinService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Payin payment create.
   */
  public payinPaymentCreate(body: any): Observable<string> {
    return this.httpClient.post<any>(`${ env.api }/payin/payment`, body);
  }
}
