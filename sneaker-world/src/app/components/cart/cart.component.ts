import { Component, Output,EventEmitter } from '@angular/core';
import { CartManagerService } from '../../Services/cart-manager.service';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: Product[] = [];

  constructor(private cartService: CartManagerService,private router:Router){
    this.getCart()
   
  }


  getCart():void{
    this.cartService.getCartList().subscribe((resp: Product[])=>{
     this.cart = resp;
    });
  }
  removeCart(prod:Product):void{
    this.cartService.removeToCart(prod);
  }
  gotToCart():void{
    this.router.navigate(['/list-cart']);
   
  }
}
