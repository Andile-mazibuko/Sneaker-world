import { Component } from '@angular/core';
import { CartManagerService } from '../../Services/cart-manager.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-cart',
  standalone: false,
  templateUrl: './list-cart.component.html',
  styleUrl: './list-cart.component.scss'
})
export class ListCartComponent {
  cart: Product[] = [];
  total: number = 0;

  constructor(private cartServ: CartManagerService){
    this.cartServ.getCartList().subscribe((resp: Product[])=>{
      this.cart = resp
    })
    this.total = this.cartServ.getTotalPrice();
  }
}
