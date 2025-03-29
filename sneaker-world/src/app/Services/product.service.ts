import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:1111/products";
  constructor(private http: HttpClient) { }

  getApiData(): Observable<any[]>{
    return this.http.get(this.apiUrl) as Observable<any[]>;
  }
}
