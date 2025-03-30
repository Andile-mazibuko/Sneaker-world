import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {
  private cart: Product[] = []; //sharable array
  private behaviorSub = new BehaviorSubject<Product[]>(this.cart);

  constructor() { }

  public addToCart(prod: Product): void{
    this.cart.push(prod);
    this.behaviorSub.next(this.cart);
  }

  public removeToCart(prod: Product): void{
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].id === prod.id){
        this.cart.splice(i,1);
        this.behaviorSub.next(this.cart);
        break;
      }
    }
  }
  public getCartList(): Observable<Product[]>{
    return this.behaviorSub as Observable<Product[]>;
  }

}
