import { SelectItem } from 'primeng/primeng';

export class SearchRules {
    public static INSTRUMENTTYPE_DOMAIN : SelectItem[] = [
         { value: '1', label: 'OBBLIGAZIONI' },
         { value: '2', label: 'AZIONI E DIRITTI' },
         { value: '4', label: 'FONDI COMUNI/SICAV/FONDI/ETF' },
         { value: '7', label: 'OPTIONS' },
         { value: '8', label: 'FUTURES' },
         { value: '14', label: 'COVERED WARRANT' },
         { value: '1010', label: 'PCT' },
         { value: '1020', label: 'Derivati non quotati' },
         { value: '1030', label: 'Certificati di deposito' },
         { value: '1040', label: 'GPM' },
         { value: '1050', label: 'POLIZZE' },
         { value: '1060', label: 'Prestito titoli' },
         { value: '1000', label: 'Liquidità' },
    ];

    public static RULES = [{
        field: { label: 'Instrument Type', value: 'accountsDetails.macroAssetsId' },
        conditions: [{
            label: 'is',
            value: '',
            dataField: {
                type: 'select',
                domain: SearchRules.INSTRUMENTTYPE_DOMAIN
            }
        },
        {
            label: 'in',
            value: '$in',
            dataField: {
                type: 'multiSelect',
                domain: SearchRules.INSTRUMENTTYPE_DOMAIN
            }
        },
        {
            label: 'all',
            value: '$all',
            dataField: {
                type: 'multiSelect',
                domain: SearchRules.INSTRUMENTTYPE_DOMAIN
            }
        }]
    },
    {
        field: { label: 'Isin', value: 'accountsDetails.macroAssets.positions.isin' },
        conditions: [{
            label: 'equals',
            value: '=',
            dataField: {
                type: 'input',
                domain: null
            }
        }]
    }];
}