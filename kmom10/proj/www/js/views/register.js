"use strict";

import m from 'mithril';
// import products from "../models/products.js";
// import deliveries from "../models/deliveries.js";
import auth from "../models/auth.js";


let regUser = {
    // oninit: authorization.initUser,
    view: function () {
        return [
         m("div.container",
            m("h2", "Här är mitt reguser form"),
            m("form", {
                onsubmit: function (e) {
                    e.preventDefault();
                    auth.register();
                }
            }, [
                m("label.input-label", "E-post"),
                //m("input[type=email].input", {
                m("input[type=email].input[placeholder=mail address]", {
                    oninput: function (e) {
                        // authorization.payload.email = e.target.value;
                        auth.email = e.target.value;
                    }
                }),
                m("label.input-label", "Password"),
                m("input[type=password][placeholder='Password'].input", {
                //m("input[type=password].input", {
                    oninput: function (e) {
                        auth.password = e.target.value;
                    }
                }),
                //m("input[type=submit][value=Logga in].button", "Logga in")
                m("input[type=submit][value='register'].input.button.green-button", "registrera")
                
            ]))
        ];
    }

};


export  { regUser };
