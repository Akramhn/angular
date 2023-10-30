import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {ListUserComponent} from "./list-user/list-user.component";
import {UsersComponent} from "./users/users.component";
import {AdduserComponent} from "./adduser/adduser.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {InvoiceListComponent} from "../invoice-list/invoice-list.component";
import {FormsModule} from "@angular/forms";
import {UserService} from "../Core/Services/user.service";


@NgModule({
  declarations: [
    ListUserComponent,
    UsersComponent,
    AdduserComponent,
    EditUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule
  ],
  providers:[InvoiceListComponent,UserService]
})
export class UserModule { }
