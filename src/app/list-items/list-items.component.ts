import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  studentsList=["mohamed","asma"];
  var3='submit';
  cd=false;
  register(){
    alert("sent data!");
  }


}
