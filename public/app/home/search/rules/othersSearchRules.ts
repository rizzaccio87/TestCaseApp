import { Conditions } from './conditions';
import { SelectItem } from 'primeng/primeng';

export class OthersSearchRules {

    public static MIFID_DOMAIN: SelectItem[] = [
        { value: 'SCADUTO', label: 'SCADUTO' },
        { value: 'PRESENTE', label: 'PRESENTE' }
    ];

    public static NDGTYPE_DOMAIN: SelectItem[] = [
        { value: 'PF', label: 'PF' },
        { value: 'DIP', label: 'DIP' },
        { value: 'CO', label: 'CO' }
    ];

    public static LIQUIDITY_DOMAIN: SelectItem[] = [
        { value: [1000], label: 'PRESENTE' }
    ];

    public static ADEQUACY_DOMAIN: SelectItem[] = [
        { value: 1, label: 'OK' },
        { value: 0, label: 'KO' }
    ];

    public static RULES = [{
        field: { label: 'Customer Type', value: 'typeNdg.code' },
        conditions: Conditions.getComparisonConditions(OthersSearchRules.NDGTYPE_DOMAIN)
    },
    {
        field: { label: 'N° Correlated Subject', value: 'correlatedSubjects' },
        conditions: Conditions.NUMERICS
    },
    {
        field: { label: 'Mifid', value: 'mifidDetails.status' },
        conditions: [{
            label: 'is',
            value: '$eq',
            dataField: {
                type: 'select',
                domain: OthersSearchRules.MIFID_DOMAIN
            }
        }]
    },
    {
        field: { label: 'Liquidity', value: 'accountsDetails.macroAssetsId' },
        conditions: [{
            label: 'is',
            value: '$in',
            dataField: {
                type: 'select',
                domain: OthersSearchRules.LIQUIDITY_DOMAIN
            }
        },
        {
            label: 'is not',
            value: '$nin',
            dataField: {
                type: 'select',
                domain: OthersSearchRules.LIQUIDITY_DOMAIN
            }
        }]
    },
    {
        field: { label: 'Adequacy', value: 'accountsDetails.portfolioSummary.adeguacy' },
        conditions: [{
            label: 'is',
            value: '$eq',
            dataField: {
                type: 'select',
                domain: OthersSearchRules.ADEQUACY_DOMAIN
            }
        }]
    },
    {
        field: { label: 'Concentration', value: 'accountsDetails.portfolioSummary.concentration' },
        conditions: [{
            label: 'is',
            value: '$eq',
            dataField: {
                type: 'select',
                domain: OthersSearchRules.ADEQUACY_DOMAIN
            }
        }]
    }
    ];
}