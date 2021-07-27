import { Product } from './model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  addProduct(ProductName, ProductDescription, ProductPrice) {
  const obj = {
  ProductName,
  ProductDescription,
  ProductPrice
  };
  console.log(obj);
  this.http.post(`${this.uri}`, obj)
  .subscribe(res => console.log('Done'));
  }

    getProducts() :Observable<Product[]> {
      return this.http.get<Product[]>(`${this.uri}`);
      }
      
    editProduct(id): Observable<Product> {
      return this
      .http
      .get<Product>(`${this.uri}/${id}`);
      }

      updateProduct(ProductName, ProductDescription, ProductPrice, id) : Observable<Product>{
        const obj = {
        id,
        ProductName,
        ProductDescription,
        ProductPrice
        };
        return this.http.put <Product> (`${this.uri} /${id}`, obj) ;
        }
}


