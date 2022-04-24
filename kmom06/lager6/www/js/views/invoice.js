"use strict";

import m from 'mithril';
import invoiceModel from '../models/invoices';

let invoice = {
    oninit: function (vnode) {
        invoiceModel.getInvoice(vnode.attrs.id);
    },
    view: function () {
        return [m("h2", "Information för vald faktura:"),
            m("table.table.table-stacked.table-striped", [
                m("thead", [
                    m("tr", [
                        m("th", "Faktura-nr"),
                        m("th", "Namn"),
                        m("th", "Address"),
                        m("th", "Stad"),
                        m("th", "Postnr"),
                        m("th", "Land"),
                        m("th", "Order-id"),
                        m("th", "Pris"),
                        m("th", "Fakturadatum"),
                        m("th", "Förfallodatum")
                    ])
                ]),
                m("tbody",
                    m("tr", [
                        m('td[data-title="Fakturanr"]', invoiceModel.invoice.id),
                        m('td[data-title="Namn"]', invoiceModel.invoice.name),
                        m('td[data-title="Adress"]', invoiceModel.invoice.address),
                        m('td[data-title="Stad"]', invoiceModel.invoice.city),
                        m('td[data-title="Postnr"]', invoiceModel.invoice.zip),
                        m('td[data-title="Land"]', invoiceModel.invoice.country),
                        m('td[data-title="Order id"]', invoiceModel.invoice.order_id),
                        m('td[data-title="Pris"]', invoiceModel.invoice.total_price + "kr"),
                        m('td[data-title="Fakturadatum"]', invoiceModel.invoice.creation_date),
                        m('td[data-title="Förfallodatum"]', invoiceModel.invoice.due_date)
                    ])
                )
            ])
        ];
    }
};

export { invoice };
