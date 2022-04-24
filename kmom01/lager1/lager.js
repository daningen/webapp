

"use strict";

var lager = (function () {
    var showLager = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Lager";

        window.mainContainer.appendChild(title);

        fetch(`https://lager.emilfolino.se/v2/products?` +
        `api_key=8e4ce3ab696d336c288e8d094260e759`).then(function (response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(repo) {
                var repoElement = document.createElement("p");

                repoElement.textContent = repo.name;
                window.mainContainer.appendChild(repoElement);
            });

            window.rootElement.appendChild(window.mainContainer);

            //menu.showMenu("folder");
        }).catch(function(error) {
            console.log('The fetch operation failed due to the following error: ', error.message);
        });
    };

    return {
        showLager: showLager
    };
})(lager);
