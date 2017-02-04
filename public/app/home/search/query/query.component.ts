import { Component } from '@angular/core';
import { QueryBuilderComponent } from './query-builder.component';
import { CustomerDetailsComponent } from '../../customers/customer-details/customer-details.component';

import { SearchService } from '../search.service';
import { CustomersService } from '../../customers/customers.service';

@Component({
  selector: 'query',
  templateUrl: './app/home/search/query/query.template.html',
  styleUrls: ['./app/home/search/query/query.style.css']
})
export class QueryComponent { 
  differ: any;
  filter : any;
  output : string;
  customers: any;
  ndgTypeDomain: any;
  selectedCustomer: any;
  retrievedCustomer: any;

  constructor(private _searchService: SearchService, private _customersService: CustomersService) {
    this.filter = {
      group: { 
        "operator": '',
        "rules": []
      }
    };

    this.ndgTypeDomain = [];
    this.ndgTypeDomain.push({ label: 'PF', value: 'PF'});
    this.ndgTypeDomain.push({ label: 'DIP', value: 'DIP'});
    this.ndgTypeDomain.push({ label: 'CO', value: 'CO'});
  }

  htmlEntities(str) {
      return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  computed(group) {
      if (!group) return "";
      let str = "(";
      
      for (let i = 0; i < group.rules.length; i++) {
          i > 0 && (str += " " + group.operator + " ");
          str += group.rules[i].group ?
              this.computed(group.rules[i].group) :
              group.rules[i].field + " " + group.rules[i].condition.operator + " " + group.rules[i].data;
      }

      return str + ")";
  }

  onRulesChange(s: string) {
    console.log(s);
    this.output = this.computed(this.filter.group);
  }

  search() {
    console.log("Composite Search service: " + this.filter.group);
    if (this.selectedCustomer || this.retrievedCustomer) {
      this.selectedCustomer = null;
      this.retrievedCustomer = null;
    }

    this._searchService.composedSearch(this.filter.group)
        .subscribe(customers  => {
            this.customers = customers;
            console.log("Composite Search Service output: " + customers);
        });
  }

  getCustomerDetails(selectedCustomer: any) {
    if (selectedCustomer) {
      this.selectedCustomer = selectedCustomer;

      this._customersService.read(selectedCustomer.ndgCode)
        .subscribe(customer => {
            this.retrievedCustomer = customer;
          });
    }
    else {
      console.log('Customer not selected');
    }
  }
}