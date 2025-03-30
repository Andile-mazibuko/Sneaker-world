import { Component } from '@angular/core';
import { CartManagerService } from '../../Services/cart-manager.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: Product[] = [];
  constructor(private cartService: CartManagerService){
    this.getCart()
  }


  getCart():void{
    this.cartService.getCartList().subscribe((resp: Product[])=>{
     this.cart = resp;
     console.log('CART LIST',this.cart)
    });
  }
}
