import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./user/list-user/list-user.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./product/products/products.component";
import {AdduserComponent} from "./user/adduser/adduser.component";
import {ErreurComponent} from "./erreur/erreur.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {MainInvoiceComponent} from "./main-invoice/main-invoice.component";
import {InvoiceComponent} from "./invoice/invoice.component";

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:'users',loadChildren:()=>
  import('./user/user.module').then(m=>m.UserModule)},
  {path:'products',loadChildren:()=>
      import('./product/product.module').then(m=>m.ProductModule)},


  {path:"mainInvoice",component:MainInvoiceComponent},
  {path:"invoice",component:InvoiceComponent},
  {path:"**",component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
