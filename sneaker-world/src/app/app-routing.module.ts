import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'', component: ProductsComponent},{path: 'products',component: ProductsComponent},{path:'list-cart', component: ListCartComponent},{path: 'login',component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
