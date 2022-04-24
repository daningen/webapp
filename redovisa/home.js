"use strict";
/*global menu*/

var home = (function () {
    var showHome = function () {
        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Dan Erlandsson";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
        ", jag heter Dan Erlandsson och är student i kursen webapp. ";

        var image = document.createElement("img");

        image.src = "danerlandsson.png";
        image.alt = "Dan Erlandsson";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {







        showHome: showHome
    };
})(home);
