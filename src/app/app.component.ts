import { Component } from '@angular/core';
import * as data from '../assets/files/data.json';
import { ExportService } from '../app/services/export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orders';
  allSelected = { checked: false, numberSelected: 0 };

  orderList: ORDER[] = [];

  statusList = ["In Transit", "Out for Delivery", "Placed", "Delivered"];
  distributionList = ["Bangalore", "Hyderabad", "Patna"];
  filters = { status: "", search: "", dist: "" }

  constructor(private exportService: ExportService) { }

  ngOnInit() {
    this.orderList = ((data as any).default);

    this.orderList.forEach(order => {
      order["selected"] = false;
      order.price = "Rs. " + order.price + ".00/-";
    });
  }

  onChecked() {
    this.allSelected.numberSelected = this.orderList.filter(order => order.selected).length;

    if (this.allSelected.numberSelected == this.orderList.length)
      this.allSelected.checked = true;
    else this.allSelected.checked = false;
  }

  onAllChecked() {
    if (this.allSelected.checked == true)
      this.orderList.forEach(order => {
        order.selected = true;
      });
    else
      this.orderList.forEach(order => {
        order.selected = false;
      });

      this.onChecked();
  }

  onClickExport(){

    if(this.allSelected.numberSelected > 0)
    this.exportService.downloadFile(this.orderList.filter(order => order.selected));
  }

}

export class ORDER {
  refId: number | string;
  custName: string;
  prodName: string;
  date: string;
  distribution: string;
  status: string;
  price: number | string;
  selected?: boolean;
}