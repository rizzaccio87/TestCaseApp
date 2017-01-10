import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'customers',
  templateUrl: './app/home/customers/customers.template.html'
})
export class CustomersComponent implements OnInit {
    customers : any;
    ndgTypeDomain : SelectItem[];
    selectedCustomer : any;
    customerDetails : any;
    accountsDetails : any;
    purchasers : SelectItem[];
    selectedAccount : any;

    constructor(private _customersService : CustomersService) {}

    ngOnInit() {
      this._customersService.list().subscribe(customers  => this.customers = customers);

          this.ndgTypeDomain = [];
          this.ndgTypeDomain.push({ label: 'PF', value: 'PF'});
          this.ndgTypeDomain.push({ label: 'DIP', value: 'DIP'});
          this.ndgTypeDomain.push({ label: 'CO', value: 'CO'});
    }

    getCustomerDetails(selectedCustomer: any) {
      if (this.selectedAccount) {
        this.selectedAccount = null;
      }

      if (selectedCustomer) {
        this.selectedCustomer = selectedCustomer;

        this._customersService.read(selectedCustomer.ndgCode)
          .subscribe(customer => {
              this.customerDetails = customer;

              this.purchasers = [];
              this.purchasers.push({label:'Select the Purchaser', value: null});
              for (let account of customer.accountsDetails) {
                this.purchasers.push({label: account.purchaserNdg, value: account});
              }

            });
      }
      else {
        console.log('Customer not selected');
      }
    }

    getAccountDetails(selectedAccount: any) {
      console.log(selectedAccount);
    }
}