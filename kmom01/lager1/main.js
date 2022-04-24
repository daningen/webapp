/* global home */
"use strict";


(function IIFE() {
    //IIFE immediately invoked functional expression, denna behöver jag inte
    //skriva ut men den är bra i min
    //stacktrace vid fel, ett tips att använda detta istället för anonyma funktioner
    //parentes före function gör att detta blir ett function expression

    //var rootElement = document.getElementById("root");

    //var mainContainer = document.createElement("main");

    //mainContainer.className = "container";var

    window.rootElement = document.getElementById("root");

    window.topNavigation = document.createElement('nav');
    window.topNavigation.className = 'top-nav';

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";
    console.log("running main.js, going to home.js function showHome");

    home.showHome();
    console.log("run menu.showNavBar(home) from main");
    //menu.showNavBar('home');
})();
