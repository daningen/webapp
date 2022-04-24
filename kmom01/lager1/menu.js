'use strict';
/* global home inventory*/

var menu = (   function () {
    //topMenu
    var topMenu = (function (newLink) {
        window.topNavigation.innerHTML = '';
        // window.mainContainer.innerHTML = '';
        var span = document.createElement('span');
        //skapa toplänk

        if (newLink !== undefined) {
            console.log(" in menu.topMenu and newLink is  " + newLink);


            //window.mainContainer.innerHTML = '';

            var topLink = document.createElement('a');

            topLink.textContent = newLink;
            window.topNavigation.appendChild(topLink);
            window.rootElement.appendChild(window.topNavigation);
            span.className = 'top-nav-title';
            span.textContent = 'inventory';

            //inparametern avgör vilken länk jag ska sätta i top-menyn

            if (newLink === 'Lagersaldo') {
                console.log("om jag trycker på lagersaldo går jag tillbaka till " +
            "inventory och toplänk ska sättas till home");
                //topLink.addEventListener("click", inventory.showInventory);

                topLink.addEventListener("click", function handleclick(e) {
                    console.log("yeeeh call" + e);
                    inventory.showInventory();   //<---skicka in ngt för att ändra länk
                });
            } else if (newLink === 'Home') {
                topLink.addEventListener("click", home.showHome);
            }

            // switch (newLink) {
            //     case "Lagersaldo":
            //         console.log("om jag trycker på lagersaldo går jag tillbaka till " +
            //     "inventory och toplänk ska sättas till home");
            //         //topLink.addEventListener("click", inventory.showInventory);
            //
            //         topLink.addEventListener("click", function handleclick(e) {
            //             console.log("yeeeh call" + e);
            //             inventory.showInventory();   //<---skicka in ngt för att ändra länk
            //         });
            //
            //     case "Home":
            //         topLink.addEventListener("click", home.showHome);
            //
            //     default:
            //         console.log("hello");
            // }
        } else {
            console.log("no new parameter sent to topMenu");
            //   //i detta fall behövs ingen toplänk
            window.topNavigation.innerHTML = '';
            window.mainContainer.innerHTML = '';
            //window.navigation.innerHTML = ''; //rensar navigation längst
        }
    // // var navElements = [
    //   {name: "Home", class: "home", nav: home.showHome},
    //   {name: "Lager", class: "folder", nav: inventory.showInventory}];
    });


    var showNavBar = (function (selected) {
        console.log("in menu.showNavBar and selected is " +selected);
        console.log("rensa först navigationslänkarna längst ner");

        window.navigation.innerHTML = "";

        var navElements = [
            {name: "Home", class: "home", nav: home.showHome},
            {name: "Lager", class: "folder", nav: inventory.showInventory}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            console.log("skapa lyssnare för varje element i navigeringen längst ner");
            navElement.addEventListener("click", element.nav);
            //console.log("the navElement is " + element.nav);

            if (selected === element.class) {
                navElement.className = "active";  //denna ändrar ikon till aktiv
            }


            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);
            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);
            window.navigation.appendChild(navElement);
        });
        console.log("before appendChild in menu.showNavBar");
        window.rootElement.appendChild(window.topNavigation);
        window.rootElement.appendChild(window.navigation);
        //
    });

    var bottomMenu = (function (selected) {
        console.log("in menu.bottomMenu selected is " + selected);
        window.navigation.innerHTML ="";
        //
        var navElements = [
            {name: "Home", class: "home", nav: home.showHome},
            {name: "Lager", class: "folder", nav: inventory.showInventory}];

        navElements.forEach(function (element) {
            console.log("looping navElements i bottomMenu");

            var navElement = document.createElement("a");
            //console.log("the navElement is " + element.nav);

            console.log("what is selected? " + selected);

            if (selected === element.class) {
                //navElement.className = "active";
                console.log("hello");
            } else {
                console.log("noiooo selection");
                //navElement.className = "active";
            }
            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;



            navElement.appendChild(icon);
            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);
            console.log("before appendChild in menu.bottomMenu");

            window.navigation.appendChild(navElement);
            window.rootElement.appendChild(window.navigation);
        });

        //window.rootElement.appendChild(window.topNavigation);
        //window.navigation.innerHTML = "hoppla";
        //xwindow.rootElement.appendChild(window.navigation);
        //
    });

    return {
        topMenu: topMenu,
        //showMenu: showMenu,
        bottomMenu: bottomMenu,
        showNavBar: showNavBar
    };
}   ) (menu);
