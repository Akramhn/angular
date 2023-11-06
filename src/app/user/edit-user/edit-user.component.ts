import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  id!:number;
  user!:User;
  constructor(private actR:ActivatedRoute,private R:Router ,private userService:UserService) {
  }
  getParam(){
    //this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.actR.paramMap.subscribe(data=>this.id=Number(data.get('id')));
    this.userService.getUserById(this.id).subscribe(data =>this.user=data)
  }
  ngOnInit() {
    this.getParam()
  }
  update(){
    this.userService.updateUser(this.user).subscribe(()=>this.R.navigate(['/users']));
  }
  updateForm=new FormGroup({
fn: new FormControl(this.user.firstName),
ln: new FormControl(this.user.lastName),
bd: new FormControl(this.user.birthDate),
email: new FormControl(this.user.email),
pass: new FormControl(this.user.password),
proff: new FormControl(this.user.profession),
account: new FormControl(this.user.accountCategory),
pic: new FormControl(this.user.picture)

  });
}

