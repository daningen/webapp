"use strict";

import m from 'mithril';
import authorization from './authorization.js';

let invoiceModel = {

    //api_key: "8e4ce3ab696d336c288e8d094260e759",

    invoice: [],
    invoices: [],

    getInvoice: function (id) {
        console.log("token in getInvoice");
        console.log(authorization.token);
        return m.request({
            method: "GET",
            url: `${authorization.baseURL}/invoices/${id}?api_key=${authorization.payload.api_key}`,
            headers: {
                'x-access-token': authorization.token
            }
        }).then(function (result) {
            invoiceModel.invoice = result.data;
        });
    },

    getInvoices: function () {
        console.log("get the invoices from invoiceModel.getInvoices");
        console.log(authorization.payload.token);
        return m.request({
            method: "GET",
            url: `${authorization.baseURL}/invoices?api_key=${authorization.payload.api_key}`,
            //https://lager.emilfolino.se/v2/invoices?api_key="8e4ce3ab696d336c288e8d094260e759"
            headers: {
                'x-access-token': authorization.token
            }
        }).then(function (result) {
            invoiceModel.invoices = result.data;
            console.log("result is");
            console.log(invoiceModel.invoices);
        });
    }
};

export default invoiceModel;
