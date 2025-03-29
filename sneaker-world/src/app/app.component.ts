import { Component } from '@angular/core';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private prods: any[] = [];
  constructor(private prod: ProductService){
    /*this.prod.getApiData().subscribe((response)=>{
      this.prods = response;
    })
    console.log(this.prods);*/
  }
  
}
