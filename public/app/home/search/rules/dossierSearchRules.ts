import { Conditions } from './conditions';
import { SelectItem } from 'primeng/primeng';

export class DossierSearchRules {

    public static DOSSIERTYPE_DOMAIN: SelectItem[] = [
        { value: 'CU', label: 'Custodia' },
        { value: 'RC', label: 'Rientro Capitali' },
        { value: 'TR', label: 'Transitorio' },
        { value: 'GA', label: 'Garanzia' }
    ];

    public static LEDGERTYPE_DOMAIN: SelectItem[] = [
        { value: 'DO', label: 'Dossier' },
        { value: 'GP', label: 'Gestione Patrimoniale.' },
        { value: 'PZ', label: 'Polizza assicurativa' },
        { value: 'CD', label: 'Certificato di Deposito' }
    ];

    public static BOOLEAN_DOMAIN: SelectItem[] = [
        { value: true, label: 'Present' },
        { value: false, label: 'Absent' }
    ];
    
    public static RULES = [{
        field: { label: 'Dossier N°', value: 'accountsDetails.masterAccounts' },
        conditions: Conditions.NUMERICS
    },
    {
        field: { label: 'Dossier Type', value: 'accountsDetails.accountsList.descriptionCategory' },
        conditions: Conditions.getComparisonConditions(DossierSearchRules.DOSSIERTYPE_DOMAIN)
    },
    {
        field: { label: 'Ledger N°', value: 'accountsDetails.generalLegderSize' }, //TODO: invertire lettere
        conditions: Conditions.NUMERICS
    },
    {
        field: { label: 'Ledger Type', value: 'accountsDetails.generalLedgers.ledgersType.code' },
        conditions: Conditions.getComparisonConditions(DossierSearchRules.LEDGERTYPE_DOMAIN)
    },
    {
        field: { label: 'Sicav', value: 'accountsDetails.accountsList.sicavEnabled' },
        conditions: [{
            label: 'is',
            value: '$eq',
            dataField: {
                type: 'select',
                domain: DossierSearchRules.BOOLEAN_DOMAIN
            }
        }]
    },
    {
        field: { label: 'Sub Dossier', value: 'accountsDetails.accountsList.subAccounts' },
        conditions: [{
            label: 'is',
            value: '$eq',
            dataField: {
                type: 'select',
                domain: DossierSearchRules.BOOLEAN_DOMAIN
            }
        }]
    }
    ];
}