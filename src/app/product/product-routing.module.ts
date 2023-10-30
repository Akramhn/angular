import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ListUserComponent} from "../user/list-user/list-user.component";

const routes: Routes = [
  {path:"",component:ProductsComponent},
  {path:"products",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
