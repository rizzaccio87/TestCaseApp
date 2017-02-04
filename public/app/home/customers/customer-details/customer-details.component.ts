import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'customer-details',
    templateUrl: './app/home/customers/customer-details/customer-details.template.html',
    styleUrls: ['./app/home/customers/customer-details/customer-details.style.css']
})
export class CustomerDetailsComponent implements OnInit {
    @Input() customer: any;
    purchasers : SelectItem[] = [];
    selectedAccount : any;

    constructor() {
        this.purchasers.push({label:'Select the Purchaser', value: null});
        console.log('constructor customer: ' + this.customer);
    }

    ngOnInit() { 
        console.log('ngOnInit customer: ' + this.customer);
        if (this.customer && this.customer.accountsDetails) {
            for (let account of this.customer.accountsDetails) {
                this.purchasers.push({label: account.purchaserNdg, value: account});
            }
        }
    }

    getAccountDetails(selectedAccount: any) {
      console.log(selectedAccount);
    }
}