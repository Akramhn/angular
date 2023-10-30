import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Invoice} from "../Models/invoice";
import {InvoiceListComponent} from "../invoice-list/invoice-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  id!:Number;
  active!:boolean;
  dataList!: Invoice[];
  constructor(private actR:ActivatedRoute,private invoicelist:InvoiceListComponent,private Router:Router) {
    this.dataList = this.invoicelist.getDataList();
  }
 /* getParam(): void {
    this.actR.paramMap.subscribe(data => {
      this.id = Number(data.get('id'));
      this.active = data.get('active') === 'true';
    });
  }*/
  getParam(): void {
    this.actR.queryParams.subscribe(params => {
      this.id = +params['id'];
      this.active = params['active']==='true';
    });
  }
  ngOnInit() {
    this.getParam()
  }
  retour(){
    this.Router.navigate(["mainInvoice"]);
  }
}
