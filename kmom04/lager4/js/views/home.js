"use strict";
import m from 'mithril';
//import { menu } from "./menu.js";

let home = {
    view: function() {
        return [

            m("h2", "Infinity Warehouses home page"),
            m("p", "Welcome to Infinity Warehouses. Where products go to disappear"),

            m("a.blue-button.button.full-width-button", {
                href: "/loginForm", oncreate: m.route.link,

            }, "Logga in"),
            m("p"),
            m("a.green-button.button.full-width-button", {
                href: "/regUser", oncreate: m.route.link
            }, "Registrera"),

        ];
    }
};

export { home };
