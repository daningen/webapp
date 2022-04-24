"use strict";
//import order from "../src/order.js";
//import topMenu from menu_view.js;
//import menuView from "./views/home_view.js";
import menuView from "./menu_view.js";


//från youtube ex omkring 53 min

var homeView = (function() {
    function drawHomeView() {
        //order.getOrders(drawElements);
        menuView.topMenu();
        menuView.showNavBar("home");//denna gör att homeknapp blir markerad
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
    }
    // function drawElements(data) {
    //     var root = document.getElementById("root");
    //     //en funktion som tar en funktion som argument
    //
    //     //elements blir en ny array med innehållet från data.map, därmed ändras inte indata
    //     var elements = data.map(function(order) {
    //         var element = document.createElement("p");
    //
    //         element.textContent = order.name;
    //         root.appendChild(element);
    //         return element;
    //     });
    //
    //     console.log(elements);
    // }


    var publicAPI = {
        drawHomeView: drawHomeView

    };

    return publicAPI;
})();

export default homeView;
