"use strict";

import m from 'mithril';
// import products from "../models/products.js";
// import deliveries from "../models/deliveries.js";
import authorization from "../models/authorization.js";

let loginForm = {
    oninit: authorization.clear,
    view: function () {
        return [
            m("h2", "logga in"),
            m("form", {
                onsubmit: function (e) {
                    e.preventDefault();
                    //skicka till modellen och där routas jag vidare
                    authorization.login();
                }
            }, [
                m("input[type=mail].input[placeholder=E-post]", {
                    oninput: function (e) {
                        authorization.payload.email = e.target.value;
                    }
                }),
                m("input[type=text][placeholder='Password'].input", {
                    oninput: function (e) {
                        authorization.payload.password = e.target.value;
                    }
                }),
                m("input[type=submit][value=logga in].input.button.green-button")
            ])
        ];
    }

};


export  { loginForm };
