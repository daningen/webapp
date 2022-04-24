"use strict";

import m from 'mithril';
import products from "../models/products.js";
import deliveries from "../models/deliveries.js";

let nyInleverans = {
    oninit: products.getProducts(),
    view: function () {
        return [
            m("h2", "Beställ ny leverans"),
            m("form", {
                onsubmit: function (e) {
                    e.preventDefault();
                    nyInleverans.save();
                }
            }, [
                m("label.input-label[className=input-label]", "Produkt"),
                m("select.input", { oninput: function (e) {
                    deliveries.currentDelivery.product_id = e.target.value;
                }
                }, [

                    m("option[value=''][disbled=true][hidden=true]", "Välj en produkt"),
                    products.currentProducts.map(function (product) {
                        return m("option", { value: product.id }, product.name);
                    })
                ]),
                m("label.input-label[className=input-label]", "Antal"),
                m("input[type=number][placeholder='Antal att beställa'].input", {
                    oninput: function (e) {
                        deliveries.currentDelivery.amount = e.target.value;
                    }
                }),
                m("label.input-label[className=input-label]", "Välj leveransdatum"),
                m("input[type=date].input", {
                    oninput: function (e) {
                        deliveries.currentDelivery.delivery_date = e.target.value;
                    }
                }),
                m("label.input-label[className=input-label]", "Kommentera"),
                m("textarea[placeholder='Skriv en kommentar'].input", {
                    oninput: function (e) {
                        deliveries.currentDelivery.comment = e.target.value;
                    }
                }),
                m("input[type=submit][value=Beställ].input.button.green-button")
            ])
        ];
    },
    save: function () {
        deliveries.currentDelivery.api_key = deliveries.apiKey;
        return m.request({
            method: "POST",
            data: deliveries.currentDelivery,
            url: deliveries.baseURL
        })
            .then(function () {
                console.log("currentDeliveries");
                console.log(deliveries.currentDelivery);
                products.updateProduct(deliveries.currentDelivery);
            })
            // .then(function () {
            //     deliveries.getDeliveries();
            // })
            .then(function () {
                // deliveries.deleteAll();
                console.log("now route to list all inlev");
                m.route.set("/listInleverans");
            })
            .catch(e => {
                console.log(e.message);
            });
    }
};


export  { nyInleverans };
