"use strict";

import m from 'mithril';
import { listInleverans } from "./views/list_inleverans.js";
import { home } from "./views/home.js";
import { nyInleverans } from "./views/nyInleverans.js";
import { layout } from './views/layout.js';
//import { layout2 } from './views/layout2.js';
//import { layout3 } from './views/layout3.js';
//import { layout4 } from './views/layout4.js';
import { regUser } from './views/register.js';
import { loginForm } from './views/loginForm.js';
import { invoices } from './views/invoices.js';
import { invoice } from './views/invoice.js';
import { newInvoice } from './views/new_Invoice.js';
import authorization from "./models/authorization.js";
//import menu from "./menu.js";
//import { authorization } from './models/authorization.js';


m.route(document.body, "/", {
    "/": {
        render: function () {
            return m(layout, m(home));
        }
    },
    //registrera ny användare
    "/regUser": {
        render: function() {
            return m(layout, m(regUser));
        }
    },
    "/loginForm": {

        render: function() {
            return  m(layout, m(loginForm));
        }
    },

    "/listInleverans": {
        render: function() {
            return  m(layout, m(listInleverans));
        }
    },
    "/nyinleverans": {
        render: function() {
            return  m(layout, m(nyInleverans));
        }
    },
    //route för alla fakturor
    "/invoices": {
        render: function() {
            //denna checka om jag är inloggad
            console.log("myToken");
            console.log(authorization.token);
            if (authorization.token) {
                console.log("yes you are logged in");
                console.log(authorization.token);
                return  m(layout, m(invoices));
            }
            //annars går jag till login-sidan
            console.log("you are not logged in");
            return m.route.set("/loginForm");
        }
    },
    "/invoice/:id": {
        render: function (vnode) {
            return m(layout, m(invoice, vnode.attrs));
        }
    },
    "/new_invoice": {
        render: function() {
            return  m(layout, m(newInvoice));
        }
    }
});
