const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeDescriptionSchema = new Schema({
    code: String,
    description: String
});

const identitySchema = new Schema({
    "id" : Number,
    "shortDescription" : String,
    "longDescription" : String
});

const currencySchema = new Schema({
    shortDescription: String,
    longDescription: String,
    change: Number
});

const amountSchema = new Schema({
    value: Number,
    currency: currencySchema,
    estimate : Boolean,
    date: String
});

const cadIdSchema = new Schema({
    agency : Number,
    branchCode : Number,
    deposit : Number,
    subDeposit : Number,
    uniqueIdentifier : String,
    garante: String
});

const secNewSchema = new Schema({
    productType : String,
    productNumber : Number
});

const secOldSchema = new Schema({
    serviceCode : Number,
	branchCode : Number,
	categoryCode : Number,
    entryCode : Number
});

const headingSchema = new Schema({
    abi: String,
    ndg : Number,
    labelHolder: String,
    type : String,
	tipoLegame : String
});

const cardSchema = new Schema({
    cardNumber : String,
	accountNumber : String,
	abi : String,
	panAlias : String,
	acceptanceFlag : String
});

const relatedProductSchema = new Schema({
    product : codeDescriptionSchema,
	relation : codeDescriptionSchema,
	heading : headingSchema,
	typeCodeBond : String,
	secNew : secNewSchema,
	secOld : secOldSchema,
	category : String,
	relatedAccountSecNew : secNewSchema,
	accountNumber : String,
	cardNumber : String
});

const bankDataSchema = new Schema({
    abi : String,
	cab : String,
	bic : String
});

const accountSchema = new Schema({
    countryCode : String,
	checkDigit : String,
	cin : String,
	accountNumber : String,
	bank : bankDataSchema,
	cashBalance : amountSchema,
	accountBalance : amountSchema,
	availableBalance : amountSchema
});

const dossierSchema = new Schema({
    "secNew" : secNewSchema,
    "secOld" : secOldSchema,
    "cadId" : cadIdSchema,
    "heading" : headingSchema,
    "productCode" : String,
    "productDescription" : String,
    "productTypeCode" : String,
    "productOu" : String,
    "state" : String,
    "titleOfParticipationCode" : String,
    "titleOfParticipationSequence" : String,
    "addressSequence" : String,
    "account" : accountSchema,
    "activationDate" : Date,
    "expirationDate" : Date,
    "agreement" : codeDescriptionSchema,
    "cardInfo" : cardSchema,
    "relatedProducts" : [ relatedProductSchema ],
    "category" : String,
    "codAlias" : String,
    "branch" : String,
    "subDepositCode" : String,
    "depositCode" : String,
    "depositCategory" : String
});

const correlatedSubjectSchema = new Schema({
    "ndgCorrelated" : String,
    "heading" : String,
    "typeCodeBond" : codeDescriptionSchema,
    "typeCodeNdg" : String,
    "startDate" : Number,
    "endDate" : Number,
    "flagContactHolder" : Boolean
});

const accountsListSchema = new Schema({
    "idDossier" : String, 
    "cadId" : cadIdSchema,
    "subAccounts" : Boolean,
    "sicavEnabled" : Boolean,
    "totalCtv" : amountSchema,
    "flgInContext" : Boolean,
    "signature" : String,
    "descriptionCategory" : String,
    "accountType" : codeDescriptionSchema
});

const insurancePolicyLedgerSchema = new Schema({
    "dossier" : dossierSchema,
    "idCashAccount" : Number,
    "cashAccount" : String,
    "idProposal" : Number,
    "insurancePolicy" : String
});

const assetManagementLedgerSchema = new Schema({
    "dossier" : dossierSchema,
    "warrantyRetentionFlag" : Boolean
});

const generalLedgersSchema = new Schema({
    "ledgersType" : codeDescriptionSchema,
    "totalCtv" : amountSchema,
    "idMacroAssetClass" : Number,
    "assetManagementLedger" : assetManagementLedgerSchema,
    "insurancePolicyLedger" : insurancePolicyLedgerSchema
});

const positionSchema = new Schema({
    "isin" : String,
    "description" : String,
    "issueCurrency" : currencySchema,
    "transactionCurrency" : currencySchema,
    "idInstrument" : Number,
    "internalCode" : String,
    "externalCode" : String,
    "lastPrice" : amountSchema,
    "performance" : Number,
    "performanceEur" : Number,
    "risk" : Number,
    "ctvEur" : Number,
    "averageCarryingPrice" : amountSchema,
    "quantity" : Number,
    "productCode" : String,
    "contractCode" : String,
    "contractCin" : Number,
    "idCategory" : String, //?
    "idSubCategory" : String, //?
    "flgDividend" : Boolean,
    "flgFund" : Boolean,
    "buyList" : Boolean,
    "negativeWatch" : Boolean,
    "recommendedBuy" : Boolean,
    "tradable" : Boolean,
    "blocked" : Boolean,
    "programmedRefundEnabled" : Boolean,
    "rcenabled" : Boolean,
    "pensionFundArcaEnabled" : Boolean
});

const macroAssetsSchema = new Schema({
    "macroAssetClassId" : Number,
    "macroAssetClassDescription" : String,
    "macroAssetClassColor" : String,
    "macroAssetClassOrderId" : Number,
    "ctv" : Number,
    "risk" : Number,
    "performance" : Number,
    "positionsSize" : Number,
    "positions" : [ positionSchema ]
});

const portfolioSummarySchema = new Schema({
    "lastUpdateTime" : Date, //?
    "flgAdequacy" : Boolean,
    "risk" : Number,
    "riskDescription" : String,
    "trend" : Number, //?
    "varValue": Number,
    "ranking" : Number,
    "misfitRisk" : Number,
    "adequacy" : Number,
    "concentration" : Number,
    "globalAssetsCtvEur" : Number,
    "checkId" : Number,
    "severity" : Number,
    "severityDescription" : String
});

const accountsDetailsSchema = new Schema({
    "purchaserNdg" : String,
    "ctv" : Number,
    "accounts" : Number,
    "masterAccounts" : Number,
    "accountsList" : [ accountsListSchema ],
    "generalLedgersSize" : Number,
    "generalLedgers" : [ generalLedgersSchema ],
    "macroAssetsSize" : Number,
    "macroAssetsId" : [ Number ],
    "macroAssets" : [ macroAssetsSchema ],
    "portfolioSummary" : [ portfolioSummarySchema ]
});

const customerSchema = new Schema({
    "ndgCode" : String,
    "typeNdg" : codeDescriptionSchema,
    "institute" : String,
    "name" : String,
    "surname" : String,
    "heading" : String,
    "birthday" : String,
    "fiscalCode" : String,
    "vatNumber" : String,
    "residence" : String,
    "fiscalAddress" : String,
    "legalLocation" : String,
    "correlatedSubjects" : Number,
    "listCorrelatedSubjects" : [ correlatedSubjectSchema ],
    "accountsDetails" : [ accountsDetailsSchema ]
});

mongoose.model('Customer', customerSchema);