"use strict";
/* global menu */

var home = (function () {
    //detta är min top menu
    var showHome = function () {
        // console.log("anropa menu.showMenu('home') från home.showHome");
        // menu.showMenu('home');
        // console.log("anropa min top i menu.showMenu");
        menu.topMenu();
        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Välkommen till lagerappen";
        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }
        greeting.textContent = timeOfDayGreeting +
          ", denna lager-applikation visar varor med information från lagret. " +
          "Klicka på lagerlänken längst ner för att se alla produkter";
        console.log("Greetings visas från home.js");
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);
        //console.log("call showMenu med home parm from home.showHome zzz   ");
        //menu.showMenu('home');

        console.log("call menu.showNavBar");

        menu.showNavBar('home');
        console.log("return from showHome");
    };


    return {
        showHome: showHome
    };
})(home);
