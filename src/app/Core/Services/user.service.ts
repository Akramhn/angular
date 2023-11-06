import { Injectable } from '@angular/core';
import {User} from "../../Models/user";
import {UserModule} from "../../user/user.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UserService {
  url="http://localhost:3000/";
  httpOptions={
    headers : new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<User[]>(this.url+"users");
  }
  getUserById(id:number){
return this.http.get<User>(this.url+'/'+id);
  }
  addUser(u:User){
    return this.http.post(this.url+"users",u,this.httpOptions) ;
  }

  deleteUser(id:number){
   return this.http.delete(`${this.url}users/${id}`);
  }

updateUser(u:User){
  let id=u.id;
  return this.http.put(this.url+'/'+id,u);
}
}
