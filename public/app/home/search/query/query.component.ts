import { Component } from '@angular/core';

import { QueryBuilderComponent } from './query-builder.component';
import { SearchService } from '../search.service';

@Component({
  selector: 'query',
  templateUrl: './app/home/search/query/query.template.html'
})
export class QueryComponent { 
  differ: any;
  filter : any;
  output : string;
  customers: any;

  constructor(private _searchService: SearchService) {
    this.filter = {
      group: { 
        "operator": '',
        "rules": []
      }
    };
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
              group.rules[i].field + " " + group.rules[i].condition + " " + group.rules[i].data;
      }

      return str + ")";
  }

  onRulesChange(s: string) {
    console.log(s);
    this.output = this.computed(this.filter.group);
  }

  search() {
    console.log("Composite Search service: " + this.filter.group);

    this._searchService.composedSearch(this.filter.group)
        .subscribe(customers  => {
            this.customers = customers;
            console.log("Composite Search Service output: " + customers);
        });
  }
}