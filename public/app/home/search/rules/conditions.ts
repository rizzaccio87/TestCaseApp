import { SelectItem } from 'primeng/primeng';

export class Conditions {

    public static NUMERICS = [
        {
            label: '=',
            value: '$eq',
            dataField: {
                type: 'spinner',
                domain: null
            }
        },
        {
            label: '>',
            value: '$gt',
            dataField: {
                type: 'spinner',
                domain: null
            }
        },
        {
            label: '>=',
            value: '$gte',
            dataField: {
                type: 'spinner',
                domain: null
            }
        },
        {
            label: '<',
            value: '$lt',
            dataField: {
                type: 'spinner',
                domain: null
            }
        },
        {
            label: '<=',
            value: '$lte',
            dataField: {
                type: 'spinner',
                domain: null
            }
        }
    ];

    public static getComparisonConditions(domain: SelectItem[]) {
        return [{
            label: '=',
            value: '$eq',
            dataField: {
                type: 'select',
                domain: domain
            }
        },
        {
            label: 'in',
            value: '$in',
            dataField: {
                type: 'multiSelect',
                domain: domain
            }
        },
        {
            label: 'all',
            value: '$all',
            dataField: {
                type: 'multiSelect',
                domain: domain
            }
        }
        ]; 
    }
}