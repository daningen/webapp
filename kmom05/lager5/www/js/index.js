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
// import { loginForm } from './views/loginForm.js';
import { login } from './views/login.js';
import { invoices } from './views/invoices.js';
import { invoice } from './views/invoice.js';
import { newInvoice } from './views/new_Invoice.js';
import auth  from "./models/auth.js";
//import menu from "./menu.js";
//import { authorization } from './models/authorization.js';

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    // console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    console.log("testingyyy på nytt");

    
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
        "/login": {

            render: function() {
                // return  m(layout, m(loginForm));
                return  m(layout, m(login));
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
        //
        //skapar enl instr youtube kmom04 webapp
        // "invoices_nya": {
        //     onmatch: function() {
        //         if (authorization.token) {
        //             console.log("yes you are logged in");
        //             console.log(authorization.token);
        //             // return  m(layout, m(invoices));
        //             return invoices;
        //         }
        //         return m.route.set("/loginForm");
        //     },
        //     //denna inträffar endast om jag är inloggad
        //         render: function (vnode) {
        //             return m(layout, vnode);
        //         }
                
        //     },
            // "/loginForm": {
            //     render: function() {
            //         return m(layout, m(loginForm));
            //     }

            // },


        //
        //route för alla fakturor
        "/invoices": {
            render: function() {
                //denna checka om jag är inloggad
                console.log("myToken");
                console.log(auth.token);
                if (auth.token) {
                    console.log("yes you are logged in");
                    console.log(auth.token);
                    return  m(layout, m(invoices));
                }
                //annars går jag till login-sidan
                console.log("you are not logged in");
                // return m.route.set("/loginForm");
                return m.route.set("/login");
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
        },
    });

}
