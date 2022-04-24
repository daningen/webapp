"use strict";
//import orderView from "./views/order_view.js";
import homeView from "./views/home_view.js";
import menuView from "./views/menu_view.js";

(function IIFE() {
    //console.log("call getOrder");
    //console.log(orderView);
    //orderView.drawOrderView();
    //orderView.drawHomeView();

    window.rootElement = document.getElementById("root");

    window.topNavigation = document.createElement('nav');
    window.topNavigation.className = 'top-nav';

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";
    console.log("running main.js, going to home.js function showHome");


    console.log("run menu.showNavBar(home) from main");

    //menuView.topMenu();
    menuView.bottomMenu();

    homeView.drawHomeView();
})();
