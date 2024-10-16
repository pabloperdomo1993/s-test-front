import { Injectable } from '@angular/core';
import * as PRODUCTS from '../mocks/products.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<any> {
    const list: any = PRODUCTS;
    
    if(Array.isArray(list.default)) {
      const products = list.default
      return of(products);
    }

    return of([])
  }

  getProductById(id: number): Observable<any> {
    const list: any = PRODUCTS;

    if(Array.isArray(list.default)) {
      const product = list.default.find((item: any) => item.id === id);
      return of(product);
    }

    return of([])
  }
}
