import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  public products: Product[] = [];
  constructor(private prodService: ProductService){}
  
  ngOnInit(): void {  
    this.prodService.getProducts().subscribe((response: Product[])=>{
      this.products = response
    }) 
  }

  addToCart(product: Product):void{
    console.log(product);
  }

}
