"use strict";

import m from 'mithril';
import orders from '../models/orders.js';

var newInvoice = {

    //oninit: orders.getOrders(),
    oninit: orders.getOrders,

    view: function () {
        console.log("in newInvoice");
        return [
            m("h2", "Ny faktura"),
            m("form", {
                onsubmit: function (e) {
                    e.preventDefault();
                    orders.sendInvoice();
                }
            }, [
                m("select.input", {
                    oninput: function (e) {
                        orders.getOrder(e.target.value);
                    }
                }, [
                    m("option[value=''][disbled=true][hidden=true]", "Välj en order"),
                    console.log("finns det ngt"),
                    console.log(orders.currentOrders),
                    orders.currentOrders.map(function (order) {
                        //600 innebär att order är lagd
                        if (order.status_id != "600" ) {
                        //if (order.status_id = "600" ) {
                            return m("option",
                                { value: order.id },
                                `#${order.id} - ${order.name}`);
                        }
                        return null;
                    })
                ]),
                m('input[type=submit][value="Skapa faktura"].input.button.green-button')
            ])
        ];
    }
};

export { newInvoice };
