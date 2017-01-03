const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const correlatedSubjectSchema = {
    "ndgCorrelated" : String,
    "heading" : String,
    "typeCodeBond" : {
        "code" : String,
        "description" : String
    },
    "typeCodeNdg" : String,
    "startDate" : Number,
    "endDate" : Number,
    "flagContactHolder" : Boolean
};

const accountListSchema = {
    "idDossier" : String, 
    "cadId" : {
        "agency" : Number,
        "branchCode" : Number,
        "deposit" : Number,
        "subDeposit" : Number,
        "uniqueIdentifier" : String,
        "garanteString" : String
    },
    "subAccounts" : Boolean,
    "sicavEnabled" : Boolean,
    "totalCtv" : Number,
    "flgInContext" : Boolean,
    "signature" : String,
    "descriptionCategory" : String,
    "accountType" : {
        "code" : String,
        "description" : String
    }
};

const accountsDetailsSchema = {
        "purchaserNdg" : String,
        "ctv" : Number,
        "accounts" : Number,
        "accountsList" : [ accountListSchema ],
        "generalLedgers" : []
};

const customerSchema = new Schema({
    "ndgCode" : String,
    "name" : String,
    "surname" : String,
    "heading" : String,
    "fiscalCode" : String,
    "vatNumber" : String,
    "residence" : String,
    "fiscalAddress" : String,
    "legalLocation" : String,
    "typeNdg" : {
        "code" : String,
        "description" : String
    },
    "correlatedSubjects" : Number,
    "listCorrelatedSubjects" : [ correlatedSubjectSchema ],
    "accountsDetails" : [ accountsDetailsSchema ]
});

mongoose.model('Customer', customerSchema);