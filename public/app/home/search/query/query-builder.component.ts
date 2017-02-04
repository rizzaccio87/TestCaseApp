import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { PositionSearchRules } from '../rules/positionSearchRules';
import { DossierSearchRules } from '../rules/dossierSearchRules';
import { OthersSearchRules } from '../rules/othersSearchRules';

import { SelectItem } from 'primeng/primeng';

@Component({
    selector: 'query-builder',
    templateUrl: './app/home/search/query/query-builder.template.html'
})
export class QueryBuilderComponent implements OnInit {
    @Input() group : any;
    @Input() parentRules : any;
    @Input() index : Number;
    @Output() rulesChange : EventEmitter<string> = new EventEmitter<string>();

    operators : SelectItem[];
    areas: SelectItem[];

    constructor() {
        this.operators = [
            { label: 'Ope', value: '' },
            { label: 'AND', value: '$and' },
            { label: 'OR', value: '$or' }
        ];

        this.areas = [
            { label: 'Area', value: '' },
            { label: 'Position', value: 'Position' },
            { label: 'Dossier', value: 'Dossier' },
            { label: 'Other', value: 'Other' }
        ];
    }

    ngOnInit() { }

    addCondition() {
        let fieldOptions: SelectItem[] = [];
        let conditionsOptions: SelectItem[] = [];
        let dataOptions: SelectItem[] = [];

        let newRule = {
            area: '',
            dataField: null,
            domains: {
                fieldOptions: fieldOptions,
                conditionOptions: conditionsOptions,
                dataOptions: dataOptions
            },
            field: '',
            condition: {
                operator: '',
                operatorType: '',
                subConditions: []
            },
            data: ''
        };

        this.group.rules.push(newRule);
        this.rulesChange.emit("Add Codition on query-builder " + this.index);
    }

    removeCondition(index) {
        this.group.rules.splice(index, 1);
        this.rulesChange.emit("Remove Codition on query-builder " + this.index);
    }

    addGroup() {
        this.group.rules.push({
            group: {
                operator: '',
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

    onAreaChange(event: any, rule: any) {
        let areaValue = event.value;
        let areaRules: any;
        console.log("onAreaChange " + areaValue);

        switch (areaValue) {
            case 'Position':
                areaRules = PositionSearchRules.RULES;
                break;
            case 'Dossier':
                areaRules = DossierSearchRules.RULES;
                break;   
            default:
                areaRules = OthersSearchRules.RULES;
                break;
        }

        // update the field rules domain
        if (rule.domains.fieldOptions && rule.domains.fieldOptions.length > 0) {
            rule.domains.fieldOptions = [];
        }

        rule.domains.fieldOptions.push({ label: 'Field', value: '' });
        for (let areaRule of areaRules) {
            rule.domains.fieldOptions.push({ label: areaRule.field.label, value: areaRule.field.value });
        }

        // empty data
        rule.field = '';
        rule.condition = {
            operator: '',
            operatorType: '',
            subConditions: []
        };
        
        if (rule.dataField) {
            rule.dataField = null;
            rule.data = null;
        }
    }

    onFieldChange(event: any, rule: any) {
        let fieldValue = event.value;
        let areaValue = rule.area;
        let areaRules: any;
        console.log("onFieldChange " + fieldValue);

        switch (areaValue) {
            case 'Position':
                areaRules = PositionSearchRules.RULES;
                break;
            case 'Dossier':
                areaRules = DossierSearchRules.RULES;
                break;         
            default:
                areaRules = OthersSearchRules.RULES;
                break;
        }

        if (rule.domains.conditionOptions && rule.domains.conditionOptions.length > 0) {
            rule.domains.conditionOptions = [];
        }

        // get the selected area rule and update the related conditions
        rule.domains.conditionOptions.push({ label: 'Condition', value: '' });
        for (let areaRule of areaRules) {
            if (fieldValue === areaRule.field.value) {
                for (let condition of areaRule.conditions) {
                    rule.domains.conditionOptions.push({ label: condition.label, value: condition.value });
                }
            }
        }

        // empty data
        rule.condition = {
            operator: '',
            operatorType: '',
            subConditions: []
        };
        if (rule.dataField) {
            rule.dataField = null;
            rule.data = null;
        }

        // emit rulesChange event
        this.rulesChange.emit("Propagation: " + this.index);
    }

    onConditionChange(event: any, rule: any) {
        let conditionValue = event.value;
        let fieldValue = rule.field;
        let areaValue = rule.area;
        let areaRules: any;
        console.log("onConditionChange " + fieldValue);

        if (rule.dataField) {
            rule.dataField = null;
            rule.data = null;
        }

        switch (areaValue) {
            case 'Position':
                areaRules = PositionSearchRules.RULES;
                break;
            case 'Dossier':
                areaRules = DossierSearchRules.RULES;
                break;      
            default:
                areaRules = OthersSearchRules.RULES;
                break;
        }

        if (rule.domains.dataOptions && rule.domains.dataOptions.length > 0) {
            rule.domains.dataOptions = [];
        }

        // get the rule data type and domain
        for (let areaRule of areaRules) {
            if (areaRule.field.value === fieldValue) {
                for (let condition of areaRule.conditions) {
                    if (condition.value === conditionValue) {
                        rule.dataField = condition.dataField;
                        rule.condition.operatorType = (condition.operatorType) ? condition.operatorType : '';
                        rule.condition.subConditions = (condition.subConditions) ? condition.subConditions : [];

                        if (condition.dataField.domain && condition.dataField.domain.length > 0) {
                            rule.domains.dataOptions.push({ label: 'Data', value: ''});
                            for (let option of condition.dataField.domain) {
                                rule.domains.dataOptions.push(option);
                            }
                        }
                    }
                }
            }
        }

        rule.data = (rule.dataField.type === 'multiSelect') ? [] : '';

        // emit rulesChange event
        this.rulesChange.emit("Propagation: " + this.index);
    }
}