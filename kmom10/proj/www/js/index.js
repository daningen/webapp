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
import { orderList} from './views/orderList.js';

import { order } from './views/order.js';
import { stationMap } from './views/stationMap';
import { invoices } from './views/invoices.js';
import { invoice } from './views/invoice.js';
import { newInvoice } from './views/new_Invoice.js';
import auth  from "./models/auth.js";

import { trafficInfo } from './views/trafficInfo.js';
import { stationList } from './views/stationList.js';
import { delays } from './views/delays.js';
import { delayDetails } from './views/delayDetails.js';
import { favorites } from './views/favorites.js';
// import { delayMap } from './views/delayMap.js';
import mapView from './views/map.js';
import heatView from './views/heatView.js';


//import menu from "./menu.js";
//import { authorization } from './models/authorization.js';

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    // console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    console.log("KMOM10 Projektet igång");
    
   
    
    m.route(document.body, "/", {
        "/": {
            render: function () {
                //return m(layout, m(home));
                return m(layout,  m(delays));
                // return m(layout,  m(stationList));
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

        "/stations": {
            render: function() {
                console.log("myToken");
                console.log(auth.token);
                if (auth.token) {
                    console.log("yes you are logged in");
                    console.log(auth.token);
                } else {
                    console.log("nope you are not logged in");
                    // // return m.route.set("/loginForm");
                return m.route.set("/login");
                }
                return  m(layout, m(stationList));
             
            }
        },


        // "/listInleverans": {
        //     render: function() {
        //         return  m(layout, m(listInleverans));
        //     }
        // },
        // "/nyinleverans": {
        //     render: function() {
        //         return  m(layout, m(nyInleverans));
        //     }
        // },
        //nedan visar alla förseningar på en karta
        "/mapView": {
            render: function() {
                console.log("myToken");
                console.log(auth.token);
                if (auth.token) {
                    console.log("yes you are logged in");
                    console.log(auth.token);
                } else {
                    console.log("nope you are not logged in");
                    // // return m.route.set("/loginForm");
                return m.route.set("/login");
                }
                return  m(layout, m(mapView));
             
            }
        },

        

       

        "/heatView": {
            render: function() {
                return  m(layout, m(heatView));
            }
        },

        "/favorites": {
            render: function() {
                return  m(layout, m(favorites));
            }
        },

        // "/mapView": function() {
        //     m.mount(document.body, mapView);
        // },

        // "/heatmap": {
        //     render: function() {
        //         return  m(layout, m(delayMap));
        //     }
        // },
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
        // "/invoices": {
        //     render: function() {
        //         //denna checka om jag är inloggad
        //         console.log("myToken");
        //         console.log(auth.token);
        //         if (auth.token) {
        //             console.log("yes you are logged in");
        //             console.log(auth.token);
        //             return  m(layout, m(invoices));
        //         }
        //         //annars går jag till login-sidan
        //         console.log("you are not logged in");
        //         // return m.route.set("/loginForm");
        //         return m.route.set("/login");
        //     }
        // },
        // "/invoice/:id": {
        //     render: function (vnode) {
        //         return m(layout, m(invoice, vnode.attrs));
        //     }
        // },
        
        "/orders/:id": {
            render: function(vnode) {
                //return m(layout, m(orderList, vnode.attrs));
                return m(layout, m(order, vnode.attrs));
                //return m(layout, {key: 'a'}, m(order, vnode.attrs));
            }
        },


        // "/heatmap/:addressObj": {
        //     render: function(vnode) {
        //         console.log("heatmap now heading to delayMap");
        //         console.log(vnode);
        //         //return m(layout, m(orderList, vnode.attrs));
        //         return m(layout, m(delayMap, vnode.attrs));
        //         //return m(layout, {key: 'a'}, m(order, vnode.attrs));
        //     }
        // },

        

        "/stationDetails/:addressObj": {
            render: function(vnode) {
                //denna checka om jag är inloggad
                // console.log("myToken");
                // console.log(auth.token);
                // if (auth.token) {
                //     console.log("yes you are logged in");
                //     console.log(auth.token);
                // } else {
                //     console.log("nope you are not logged in");
                //     // // return m.route.set("/loginForm");
                // return m.route.set("/login");
                // }
                //     
                //     console.log("stationDetails now heading to stationMap");
                // console.log(vnode);
                return m(layout, m(stationMap, vnode.attrs));
                // //return m(layout, {key: 'a'}, m(order, vnode.attrs));
                // }
                //annars går jag till login-sidan
                // console.log("you are not logged in");
                
                
            }
        },

        "/orders": {
            render: function(vnode) {
                console.log(vnode);
                //return m(layout, m(ordersView, vnode.attrs));
                //return  m(layout, m(ordersView));
                return  m(layout, m(orderList));
                //return m(layout, {key: 'b'}, m(orderList));
            }
        },

        // "/stations": {
        //     render: function(vnode) {
        //         console.log(vnode);
        //         //return m(layout, m(ordersView, vnode.attrs));
        //         //return  m(layout, m(ordersView));
        //         // return  m(layout, m(orderList));
        //         // return m(layout,  m(stationList));
        //         return m(layout,  m(stationList));
        //         //return m(layout, {key: 'b'}, m(orderList));
        //     }
        // },
        "/delays": {
            render: function(vnode) {
                console.log(vnode);
                
                //return m(layout, m(ordersView, vnode.attrs));
                //return  m(layout, m(ordersView));
                // return  m(layout, m(orderList));
                // return m(layout,  m(stationList));
                return m(layout,  m(delays));
                //return m(layout, {key: 'b'}, m(orderList));
            }
        },
        "/delayDetails": {
        // "/delayDetails/:name": {
            render: function(vnode) {
                console.log(vnode);
                return m(layout,  m(delayDetails, vnode.attrs));
                            }
        },

        "/delayDetails/:id": {
            render: function(vnode) {
                //return m(layout, m(orderList, vnode.attrs));
                return m(layout, m(delayDetails, vnode.attrs));
                //return m(layout, {key: 'a'}, m(order, vnode.attrs));
            }
        },
    });

}
