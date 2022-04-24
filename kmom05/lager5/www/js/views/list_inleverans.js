"use strict";
import m from 'mithril';
import deliveries from "../models/deliveries.js";

//oninit gör att deliveries.getDeliveries initieras så att jag får data
let listInleverans = {
    oninit: deliveries.getDeliveries,
    view: function() {
        return [
            m("h2", "Inleveranser"),
            m("a.button.blue-button", {
                href: "/nyinleverans", oncreate: m.route.link
            }, "Ny leverans"),
            deliveries.currentDeliveries.map(function(delivery) {
                return m("div", [
                    m("p", delivery.product_name + ", " + delivery.product_id +
                        ". Ny beställning på " + delivery.amount + "st,"
                            + " anländer " + delivery.delivery_date )
                ]);
            })

        ];
    }
};

export { listInleverans };
