"use strict";
import m from 'mithril';
//import { menu } from "./menu.js";

let home = {
    view: function() {
        return [
            // m("nav.top-nav",
            //     { textContent: "Infinity Warehouses"}),
            //m("main.container", [
            //m("h2", "Infinity Warehouses"),
            m("h2", "Welcome to the Warehouse")
            //]),

            // m("nav.bottom-nav", [
            //     m("a", {
            //         href: "/", oncreate: m.route.link
            //     }, "Hem"),
            //     m("a", {
            //         href: "/listInleverans", oncreate: m.route.link
            //     }, "Inleverans")
            //
            // ])
        ];
    }
};

export { home };
