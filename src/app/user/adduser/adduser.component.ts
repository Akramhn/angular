import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  constructor(private userService: UserService, private r: Router) {}
  list:User[]=[];

 

 /* add() {
    this.userService
      .addUser(this.user)
      .subscribe(() => {
        alert('Add User Success');
        this.r.navigate(['users']); // You need to wrap this in the subscribe's success callback.
      });
  }*/
  ngOnInit(){
    this.userService.getAllUsers().subscribe(data => this.list = data);
   }
   add(F:NgForm){
  
  
     
      const newUser : User = {
      id: this.list.length + 1, // Calculate the new ID based on the list length
      firstName: F.value.fn,
      lastName: F.value.ln,
      birthDate: F.value.bd,
      accountCategory: F.value.cc,
      email: F.value.em,
      password: F.value.pw,
      picture: "ccccc",
      profession: F.value.pf,

      }
      
      this.userService.addUser(newUser).subscribe(() => {
        alert('Add User Success');
        this.r.navigate(['users']);
      });
      
  }
  
}
