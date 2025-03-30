import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [{path:'', component: ProductsComponent},{path:'list-cart', component: ListCartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
