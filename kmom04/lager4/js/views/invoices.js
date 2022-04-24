"use strict";

import m from 'mithril';
import invoiceModel from "../models/invoices.js";

let invoiceTable = {
    view: function () {
        console.log("invoices in in invoicsTable");
        return [m("h2", "Faktura info:"),
            m("table.table.table-stacked.table-striped", [
                m("thead", [
                    m("tr", [
                        m("th", "Faktura nr"),
                        m("th", "Namn"),
                        m("th", "Pris"),
                        m("th", "Fakturadatum"),
                        m("th", "Förfallodatum")
                    ])
                ]),
                m("tbody", invoiceModel.invoices.map(function (invoice) {
                    return m("tr", { href: "/invoice/" + invoice.id, oncreate: m.route.link}, [
                        m('td[data-title="Faktura nr:"]', invoice.id),
                        m('td[data-title="Namn:"]', invoice.name),
                        m('td[data-title="Pris:"]', invoice.total_price + "kr"),
                        m('td[data-title="Fakturadatum:"]', invoice.creation_date),
                        m('td[data-title="Förfallodatum:"]', invoice.due_date)
                    ]);
                }))
            ])
        ];
    }
};

var noInvoices = {
    view: function () {
        return m("p", "Det finns inga fakturor");
    }
};

var createInvoice = {
    view: function () {
        return m("a.green-button.button.full-width-button", {
            href: "/new_invoice", oncreate: m.route.link
        }, "Create Invoice");
    }
};


let invoices = {

    //kommentera onitit för att för att få ett negativt test, dvs fakturor finns ej och
    //därmed visas det som står i noInvoices
    oninit: invoiceModel.getInvoices,

    view: function () {
        console.log("in invoices");
        return [
            //m("h2", "Invoices"),
            m(createInvoice),

            //Om inga fakturor finns gå till noInvoices
            invoiceModel.invoices.length > 0 ? m(invoiceTable) : m(noInvoices)
        ];
    }
};

export { invoices };
