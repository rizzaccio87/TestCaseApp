import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { SearchRules } from './searchRules';
import { SearchService } from './search.service';

@Component({
    selector: 'search',
    templateUrl: './app/home/search/search.template.html'
})
export class SearchComponent implements OnInit {
    rule : any;
    searchFields : SelectItem[];
    searchConditions : SelectItem[];
    searchDataField : any;
    searchDataOptions: SelectItem[];
    customers : any;
    ndgTypeDomain: SelectItem[];

    constructor(private _searchService : SearchService) {
        this.rule = {
            field: '',
            condition: '',
            data: null
        };

        this.searchFields = [];
        this.searchConditions = [];
        this.searchDataOptions = [];
        
        this.searchFields.push({ label:'Field', value: ''});
        for (let rule of SearchRules.RULES) {
            this.searchFields.push({ label: rule.field.label, value: rule.field.value });
        }

        this.ndgTypeDomain = [];
        this.ndgTypeDomain.push({ label: 'PF', value: 'PF'});
        this.ndgTypeDomain.push({ label: 'DIP', value: 'DIP'});
        this.ndgTypeDomain.push({ label: 'CO', value: 'CO'});
    }

    ngOnInit() {}

    onFieldChange(event: any) {
        let fieldValue = event.value;
        console.log("onFieldChange " + fieldValue);

        if (this.searchConditions && this.searchConditions.length > 0) {
            this.searchConditions = [];
            this.rule.condition = "";
            this.rule.data = null;
        }

        if (this.searchDataField) {
            this.searchDataField = null;
        }

        if (this.searchDataOptions && this.searchDataOptions.length > 0) {
            this.searchDataOptions = [];
        }

        for (let rule of SearchRules.RULES) {
            if (rule.field.value === fieldValue) {
                this.searchConditions.push({ label: 'Condition', value: '' });
                for (let condition of rule.conditions) {
                    this.searchConditions.push({ label: condition.label, value: condition.value });
                }
            }
        }
    }

    onConditionChange(event: any) {
        if (this.searchDataField) {
            this.searchDataField = null;
            this.rule.data = null;
        }

        if (this.searchDataOptions && this.searchDataOptions.length > 0) {
            this.searchDataOptions = [];
        }

        let conditionValue = event.value;
        console.log("onConditionChange " + conditionValue);

        let fieldValue = this.rule.field;
        for (let rule of SearchRules.RULES) {
            if (rule.field.value === fieldValue) {
                for (let condition of rule.conditions) {
                    if (condition.value === conditionValue) {
                        this.searchDataField = condition.dataField;

                        if (condition.dataField.domain && condition.dataField.domain.length > 0) {
                            this.searchDataOptions.push({ label: 'Data', value: ''});
                            for (let option of condition.dataField.domain) {
                                this.searchDataOptions.push(option);
                            }
                        }
                    }
                }
            }
        }

        if (this.searchDataField)
            console.log('onConditionChange searchDataField type: ' + this.searchDataField.type);
    }

    search() {
        console.log("Search service: " + this.rule);

        this._searchService.search(this.rule)
            .subscribe(customers  => {
                this.customers = customers;
                console.log("Search Service output: " + customers);
            });
    }
}