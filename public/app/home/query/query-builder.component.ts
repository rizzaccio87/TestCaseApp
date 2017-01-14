import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'query-builder',
    templateUrl: './app/home/query/query-builder.template.html'
})
export class QueryBuilderComponent implements OnInit {
    @Input() group : any;
    @Input() parentRules : any;
    @Input() index : Number;
    @Output() rulesChange : EventEmitter<string> = new EventEmitter<string>();

    operators : SelectItem[];
    fields : SelectItem[];
    conditions : SelectItem[];

    constructor() {
        this.operators = [
            { label: 'AND', value: 'AND' },
            { label: 'OR', value: 'OR' }
        ];
        
        this.fields = [
            { label: 'Firstname', value: 'Firstname' },
            { label: 'Lastname', value: 'Lastname' },
            { label: 'Birthdate', value: 'Birthdate' },
            { label: 'City', value: 'City' },
            { label: 'Country', value: 'Country' }
        ];

        this.conditions = [
            { label: '=', value: '=' },
            { label: '<>', value: '<>' },
            { label: '<', value: '<' },
            { label: '<=', value: '<=' },
            { label: '>', value: '>' },
            { label: '>=', value: '>=' }
        ];
    }

    ngOnInit() { }

    addCondition() {
        this.group.rules.push({
            condition: '=',
            field: 'Firstname',
            data: ''
        });

        this.rulesChange.emit("Add Codition on query-builder " + this.index);
    }

    removeCondition(index) {
        this.group.rules.splice(index, 1);
        this.rulesChange.emit("Remove Codition on query-builder " + this.index);
    }

    addGroup() {
        this.group.rules.push({
            group: {
                operator: 'AND',
                rules: []
            }
        });

        this.rulesChange.emit("Add Group on query-builder " + this.index);
    }

    removeGroup() {
        if (this.parentRules) {
            this.parentRules.splice(this.index, 1);
            this.rulesChange.emit("Remove Group on query-builder " + this.index);
        }
    }

    onRulesChange(s: string) {
        console.log(s);
        this.rulesChange.emit("Propagation: " + this.index);
    }

    onChange() {
        this.rulesChange.emit("Propagation: " + this.index);
    }
}