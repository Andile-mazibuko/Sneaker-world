import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../Services/product.service';
import { CartManagerService } from '../../Services/cart-manager.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  public products: Product[] = [];
  cart!: Product[];
  constructor(private prodService: ProductService,private cartService: CartManagerService){}
  
  ngOnInit(): void {  
    this.prodService.getProducts().subscribe((response: Product[])=>{
      this.products = response
    }) 
  }

  addToCart(product: Product, event: Event):void{
    event.preventDefault();
    console.log(product);
   // this.cartService.addToCart(product);
  }
  
}
