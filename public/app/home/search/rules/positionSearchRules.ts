import { Conditions } from './conditions';
import { SelectItem } from 'primeng/primeng';

export class PositionSearchRules {
    
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
         { value: '1000', label: 'Liquidità' }
    ];

    public static PRODUCTCODE_DOMAIN: SelectItem[] = [
        { value: 'SOL', label: 'SOL' },
        { value: 'PAC', label: 'PAC' },
        { value: 'RC', label: 'RC' },
        { value: 'RP', label: 'RP' }
    ];

    public static RULES = [{
        field: { label: 'Instrument Type', value: 'accountsDetails.macroAssetsId' },
        conditions: Conditions.getComparisonConditions(PositionSearchRules.INSTRUMENTTYPE_DOMAIN)
    },
    {
        field: { label: 'Isin', value: 'accountsDetails.macroAssets.positions.isin' },
        conditions: [{
            label: 'equals',
            value: '$eq',
            dataField: {
                type: 'input',
                domain: null
            }
        }]
    },
    {
        field: { label: 'Internal Code', value: 'accountsDetails.macroAssets.positions.internalCode' },
        conditions: [{
            label: 'equals',
            value: '$eq',
            dataField: {
                type: 'input',
                domain: null
            }
        }]
    },
    {
        field: { label: 'External Code', value: 'accountsDetails.macroAssets.positions.externalCode' },
        conditions: [{
            label: 'equals',
            value: '$eq',
            dataField: {
                type: 'input',
                domain: null
            }
        }]
    },
    {
        field: { label: 'Product Code', value: 'accountsDetails.macroAssets.positions.productCode' },
        conditions: Conditions.getComparisonConditions(PositionSearchRules.PRODUCTCODE_DOMAIN)
    },
    {
        field: { label: 'Contract Code', value: 'accountsDetails.macroAssets.positions.contractCode' },
        conditions: [{
            label: 'equals',
            value: '$eq',
            dataField: {
                type: 'input',
                domain: null
            }
        }]
    },
    {
        field: { label: 'Ctv', value: 'accountsDetails.macroAssets.positions.ctvEur' },
        conditions: Conditions.NUMERICS
    },
    {
        field: { label: 'Quantity', value: 'accountsDetails.macroAssets.positions.quantity' },
        conditions: Conditions.NUMERICS
    }
    ];
}