import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {AdduserComponent} from "./adduser/adduser.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  {path:"",component:ListUserComponent},
  {path:"users",component:ListUserComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"edit/:id",component:EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
