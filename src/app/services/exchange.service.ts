import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Exchange quote.
   */
  public exchangeQuote(body: any): Observable<string> {
    return this.httpClient.post<any>(`${ env.api }/exchange/quote`, body);
  }
}
