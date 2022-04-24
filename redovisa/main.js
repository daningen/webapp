// main.js
"use strict";
/*global home*/

(function () {
    window.rootElement = document.getElementById("root");

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";
    /*eslint no-undef: "error"*/
    home.showHome();
})();
