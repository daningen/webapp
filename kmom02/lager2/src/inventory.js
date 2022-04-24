'use strict';

import menuView from "../views/menu_view.js";

var inventory = (function() {
    console.log("running inventory.js, denna körs direkttt");
    var topMenuVal = "home";
    var showInventory = function() {
        console.log("in inventory.showInventory");

        //sätt om navigationsbar lager till aktiv
        //console.log("anropa menu.showNavBar för att ändra navbar nej");


        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Alla Produkter";

        var ul=document.createElement('ul');

        ul.className = 'inventory';
        //anropet menu.showMenu("folder") sätter om aktuellt navElement till aktiv
        //menu.showMenu("folder");
        //menu.topMenu("folder");
        // menu.test();
        // console.log("anropar menu.topMenu");
        // menu.topMenu('Lagersaldo');
        // console.log("tillbaka i inventory.showInventory");

        console.log("before fetch");
        //hämta alla produkter
        fetch('https://lager.emilfolino.se/v2/products?api_key=8e4ce3ab696d336c288e8d094260e759')
            .then(function(response) {
                //console.log("the result");
                //console.log(response);
                return response.json();
            })
            .then(function(result) {
                menuView.topMenu('Home');
                console.log("loopa igenom hela resultset och skriv ut produkter med saldo");
                console.log("inventory.showInventory: tömmer mainContainer ");
                window.mainContainer.innerHTML = "";

                window.mainContainer.appendChild(title),
                window.rootElement.appendChild(window.mainContainer);

                //loopa igenom alla hämtade produkter och skriv ut dessa
                result.data.forEach(function(product) {
                    var li = document.createElement("li");
                    var productEl = document.createElement("a");
                    var stockEl = document.createElement("a");

                    productEl.textContent = product.name;
                    stockEl.textContent = product.stock;
                    li.id = product.id;
                    productEl.id = product.id;
                    stockEl.id = product.id;
                    li.appendChild(productEl);
                    li.appendChild(stockEl);
                    ul.appendChild(li);
                    window.mainContainer.appendChild(ul);

                    // console.log("anropa menu.showNavBar(folder) från inventory");
                    // menu.showNavBar("folder");
                    //console.log("call menu.topMenu(Home)");
                    //menu.topMenu('Home');
                    //lägg en lyssnare på varje produkt som visas
                    productEl.addEventListener("click", function handleclick(e) {
                        //console.log(event.target);
                        //console.log(product.description);
                        console.log("event is " + e);

                        //tömmer vyn
                        console.log("tömmer vyn i inventory.showInventory");
                        console.log("detta görs innan jag skriver " +
                        "beskrivningen för klickad produkt");
                        window.mainContainer.innerHTML = "";

                        var title = document.createElement("h1");

                        title.className = "title";
                        title.textContent = "Description";

                        var productElement = document.createElement("p");

                        productElement.textContent = "- " + product.description;
                        console.log("skriv ut beskrivning av produkten ");
                        window.mainContainer.appendChild(title);
                        window.mainContainer.appendChild(productElement);
                        console.log("produktElement skrivet ");
                        console.log("anropa menu.topmenu(Lagersaldo)");
                        menuView.topMenu('Lagersaldo');
                        //topMenuVal = 'Lagersaldo';
                        //console.log("topMenuVal " + topMenuVal);
                    });

                    //menu.bottomMenu("description");
                });
                console.log("anropa menu.showNavBar(folder) från inventory");
                menuView.showNavBar("folder");
                console.log("setting top till topMenuVal" + topMenuVal);


                console.log("in inventory call menu.topMenu('Home')" );
                //var y = document.body.container.title;
                //var body = document.getElementsByTagName('body')[0];
                console.log("mainContainer");
            });

        // var respondClick = function() {
        //
        // };
    };

    return {
        showInventory: showInventory
    };
    //})(home);
})();

export default inventory;
