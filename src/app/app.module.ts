import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { ListUserComponent } from './user/list-user/list-user.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './user/users/users.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './product/products/products.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ErreurComponent } from './erreur/erreur.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    HeaderComponent,
    FooterComponent,

    NavComponent,

    MyDirectiveDirective,
    HomeComponent,


    ErreurComponent,

    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  exports: [
    MyDirectiveDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
