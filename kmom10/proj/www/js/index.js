"use strict";

import m from 'mithril';
import { home } from "./views/home.js";
import { layout } from './views/layout.js';
import { regUser } from './views/register.js';
import { login } from './views/login.js';
import { stationMap } from './views/stationMap';
import auth  from "./models/auth.js";

// import { trafficInfo } from './views/trafficInfo.js';
import { stationList } from './views/stationList.js';
import { delays } from './views/delays.js';
import { delayDetails } from './views/delayDetails.js';
import { favorites } from './views/favorites.js';
// import { delayMap } from './views/delayMap.js';
import mapView from './views/map.js';
import heatView from './views/heatView.js';

//import { authorization } from './models/authorization.js';

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    console.log("KMOM10 Projektet igång");
    
   
    
    m.route(document.body, "/", {
        "/": {
            render: function () {
                return m(layout,  m(delays));
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
