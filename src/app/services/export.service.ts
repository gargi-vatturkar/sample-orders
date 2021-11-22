import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  downloadFile(data: any) {
    const replacer = (key, value) => value === null ? '' : value;

    const keys = Object.keys(data[0])
    const header = ["Ref. ID", "Customer Name", "Product Name", "Date", "Distribution", "Status", "Price"]

    let csv = data.map(row => keys.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    console.log(csv)

    csv.unshift(header.join(','));

    console.log(csv)
    let csvArray = csv.join('\r\n');
    console.log(csvArray)

    var blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, "order-data.csv");
  }
}
