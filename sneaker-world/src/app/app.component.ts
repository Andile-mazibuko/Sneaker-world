import { Component } from '@angular/core';
import { ProductService } from './Services/product.service';
import { CartManagerService } from './Services/cart-manager.service';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  cart!: Product[];  
  
  constructor(private prod: ProductService,private cartManager: CartManagerService){
    this.cartManager.getCartList().subscribe((resp: Product[])=>{
      this.cart = resp
    });
  }
  
}
