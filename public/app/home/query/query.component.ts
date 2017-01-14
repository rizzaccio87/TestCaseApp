import { Component } from '@angular/core';

import { QueryBuilderComponent } from './query-builder.component';

@Component({
  selector: 'query',
  templateUrl: './app/home/query/query.template.html'
})
export class QueryComponent { 
  differ: any;
  filter : any;
  output : string;

  constructor() {
    this.filter = {
      group: { 
        "operator": "AND",
        "rules": []
      }
    }
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
}