"use strict";
import m from "mithril";
//i denna modell hämtar jag data motsvarande fetch

const products = {
    //skapa ett obj som innehåller de produkter jag nyss sökt på
    //som initialt är en tom array
    currentProducts: [],

    //skapa en funktion som mha api hämtar mina produkter
    //mkt viktigt att hämta sitt data och lägga det i en modell,
    //om det läggs direkt i en vy kommer det resultera i en oändlig loop

    searchProducts: function (query) {
        //m.request tar emot ett objekt som är konfig av den request som ska göras
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/products/search/`+
            `${query}?api_key=8e4ce3ab696d336c288e8d094260e759`
            //uppdatera arrayen med det data som hämtats och vyn kommer automatiskt ritas om
        }).then(function(result) {
            products.currentProducts = result.data;
        });
    },
    //current blir först ett tomt objekt
    current: {},
    //skriv funktionen load
    load: function (id) {
        return m.request({
            method: "GET",
            //url: `https://lager.emilfolino.se/v2/products/373?
            //api_key=8e4ce3ab696d336c288e8d094260e759`
            url: `https://lager.emilfolino.se/v2/products/`+
            `${id}?api_key=8e4ce3ab696d336c288e8d094260e759`
            //uppdatera arrayen med det data som hämtats och vyn kommer automatiskt ritas om
        }).then(function(result) {
            products.current = result.data;
        });
    }
};

export default products;
