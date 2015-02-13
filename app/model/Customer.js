/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 25/09/13
 *
 * @class SageCME.model.Custommer
 *
 * This model contains Customer Hermes data
 */

Ext.define('SageCME.model.Customer', {
    extend : 'Ext.data.Model',


    config : {
        /**
         *
         */
        fields : [
            { name : '$dataset', type : 'string'   },
            { name : '$key', type : 'string'   },
            { name : '$resourceKind', type : 'string'},
            { name : '$updated', type : 'string'},
            { name : '$url', type : 'string'},
            { name : 'accountingType', type : 'string'},
            { name : 'active', type : 'object'},
            { name : 'centralPurchasingAgencyCustomerRelation', type : 'boolean'},
            { name : 'createDate', type : 'string'},
            { name : 'creditInsuranceCeiling', type : 'int'},
            { name : 'currentControl', type : 'string'},
            { name : 'customerGroupReference1', type : 'object'},
            { name : 'depotPrincipalCustomerReference', type : 'object'},
            { name : 'discountRate', type : 'int'},
            { name : 'extras', type : 'object'},
            { name : 'financialAccountReference', type : 'string'},
            { name : 'language', type : 'string'},
            { name : 'mainPostalAddress', type : 'object'},
            { name : 'maxOutStanding', type : 'int'},
            { name : 'monthlyOrQuaterlyDiscount', type : 'int'},
            { name : 'name', type : 'string'},
            { name : 'operatingCompanyReference', type : 'object'},
            { name : 'originalActive', type : 'string'},
            { name : 'payingAuthorityFinancialAccount', type : 'object'},
            { name : 'riskCode', type : 'string'},
            { name : 'shortName', type : 'string'},
            { name : 'tradeDiscountRate', type : 'int'},
            { name : 'underSurveillance', type : 'boolean'},
            { name : 'yearlyDiscountRate', type : 'int'}
        ],

        /**
         *
         */
        idProperty : '$key'
    }
});