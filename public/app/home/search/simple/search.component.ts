import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { PositionSearchRules } from '../rules/positionSearchRules';
import { DossierSearchRules } from '../rules/dossierSearchRules';
import { OthersSearchRules } from '../rules/othersSearchRules';
import { CustomerDetailsComponent } from '../../customers/customer-details/customer-details.component';

import { SearchService } from '../search.service';
import { CustomersService } from '../../customers/customers.service';

@Component({
    selector: 'search',
    templateUrl: './app/home/search/simple/search.template.html',
    styleUrls: ['./app/home/search/simple/search.style.css']
})
export class SearchComponent implements OnInit {
    areaTabs: any;
    customers : any;
    ndgTypeDomain: SelectItem[];
    selectedCustomer: any;
    retrievedCustomer: any;

    constructor(private _searchService : SearchService, private _customersService: CustomersService) {

        this.areaTabs = [
            { label: 'Position', value: 'Position', searchRules: PositionSearchRules.RULES, rule: {} },
            { label: 'Dossier', value: 'Dossier', searchRules: DossierSearchRules.RULES, rule: {} },
            { label: 'Other', value: 'Other', searchRules: OthersSearchRules.RULES, rule: {} }
        ];

        for (let areaTab of this.areaTabs) {
            areaTab.rule = {
                area: areaTab.label,
                dataField: null,
                domains: {
                    fieldOptions: [],
                    conditionOptions: [],
                    dataOptions: []
                },
                field: '',
                condition: {
                    operator: '',
                    operatorType: '',
                    subConditions: []
                },
                data: ''
            };

            areaTab.rule.domains.fieldOptions.push({ label: 'Field', value: '' });
            for (let searchRule of areaTab.searchRules) {
                areaTab.rule.domains.fieldOptions.push({ label: searchRule.field.label, value: searchRule.field.value });
            }
        }

        this.ndgTypeDomain = [];
        this.ndgTypeDomain.push({ label: 'PF', value: 'PF'});
        this.ndgTypeDomain.push({ label: 'DIP', value: 'DIP'});
        this.ndgTypeDomain.push({ label: 'CO', value: 'CO'});
    }

    ngOnInit() {}

    onFieldChange(event: any, areaTab: any) {
        let fieldValue = event.value;
        console.log("onFieldChange " + fieldValue);

        if (areaTab.rule.domains.conditionOptions && areaTab.rule.domains.conditionOptions.length > 0) {
            areaTab.rule.domains.conditionOptions = [];
        }

        // get the selected area rule and update the related conditions
        areaTab.rule.domains.conditionOptions.push({ label: 'Condition', value: '' });
        for (let searchRule of areaTab.searchRules) {
            if (fieldValue === searchRule.field.value) {
                for (let condition of searchRule.conditions) {
                    areaTab.rule.domains.conditionOptions.push({ label: condition.label, value: condition.value });
                }
            }
        }

        // empty data
        areaTab.rule.condition = {
            operator: '',
            operatorType: '',
            subConditions: []
        };
        if (areaTab.rule.dataField) {
            areaTab.rule.dataField = null;
            areaTab.rule.data = null;
        }
    }

    onConditionChange(event: any, areaTab: any) {
        let conditionValue = event.value;
        let fieldValue = areaTab.rule.field;
        console.log("onConditionChange " + fieldValue);

        if (areaTab.rule.dataField) {
            areaTab.rule.dataField = null;
            areaTab.rule.data = null;
        }

        if (areaTab.rule.domains.dataOptions && areaTab.rule.domains.dataOptions.length > 0) {
            areaTab.rule.domains.dataOptions = [];
        }

        // get the rule data type and domain
        for (let searchRule of areaTab.searchRules) {
            if (searchRule.field.value === fieldValue) {
                for (let condition of searchRule.conditions) {
                    if (condition.value === conditionValue) {
                        areaTab.rule.dataField = condition.dataField;
                        areaTab.rule.condition.operatorType = (condition.operatorType) ? condition.operatorType : '';
                        areaTab.rule.condition.subConditions = (condition.subConditions) ? condition.subConditions : [];

                        if (condition.dataField.domain && condition.dataField.domain.length > 0) {
                            areaTab.rule.domains.dataOptions.push({ label: 'Data', value: ''});
                            for (let option of condition.dataField.domain) {
                                areaTab.rule.domains.dataOptions.push(option);
                            }
                        }
                    }
                }
            }
        }

        areaTab.rule.data = (areaTab.rule.dataField.type === 'multiSelect') ? [] : '';
    }

    search(areaTab: any) {
        console.log("Search service: " + areaTab.rule);

        this._searchService.search(areaTab.rule)
            .subscribe(customers  => {
                this.customers = customers;
                console.log("Search Service output: " + customers);
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