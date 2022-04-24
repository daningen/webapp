"use.strict";
/* exported inventoryCheck */
import orderView from "../views/order_view.js";
//import menuView from "../views/menu_view.js";


var ordersModel = {
    baseURL: "https://lager.emilfolino.se/v2/",
    apiKey: "8e4ce3ab696d336c288e8d094260e759",
    allOrders: [],
    inventoryCheck: function(currentOrder) {
        console.log("in inventoryCheck in ordersModel");
        var count = currentOrder.order_items.length;
        //filtrerar ut de ordrar där amount(det beställda) är mindre än eller
        //lika med stock(det som finns i lager))
        var result = currentOrder.order_items.filter(item => item.amount <= item.stock);


        console.log("number of count: " + count);
        console.log("result is: ");
        console.log(result);

        console.log(count, result.length);

        if (count == result.length) {
            console.log("ja det finns i lager, du kan ändra status på ordern");
            ordersModel.updateOrder(currentOrder);
        } else {
            console.log("tyvärr det finns inte tillräckligt många i lager");
        }
        //return count == result.length;
    },

    //ändra status på ordern

    //*
    updateOrder: function(order) {
        order.status_id = 200;
        order.api_key = ordersModel.apiKey;
        console.log(order);
        //fetch("https://lager.emilfolino.se/v2/orders", {
        fetch(ordersModel.baseURL+"orders?api_key="+ordersModel.apiKey, {
            body: JSON.stringify(order),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        })
            .then(function (response) {
                order.order_items.map(function (oi) {
                    console.log("now its time to update the product");
                    console.log(response);
                    console.log(oi);
                    ordersModel.updateProduct(oi);
                });
            });
    },

    updateProduct: function(oi) {
        console.log("in updateProduct");
        console.log("stock " + oi.stock);
        console.log("amount " + oi.amount);

        //minska stock med det beställda antalet
        oi.stock = oi.stock - oi.amount;
        oi.id = oi.product_id;
        oi.api_key = ordersModel.apiKey;
        console.log("stock to be changed to " + oi.stock);

        console.log("ID" + oi.id);
        //console.log(oi.api_key);
        fetch(ordersModel.baseURL+"products?api_key="+ordersModel.apiKey, {
            body: JSON.stringify(oi),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        })
            .then(function(response) {
                console.log("uppdatering klar, visa aktuella ordrar nu");
                console.log(response);
                console.log(response.status);
                //ordersModel.getOrders(drawElements);
                orderView.drawOrderView();


            //updateProduct(order.order_items);
            });
    },
    // //här får vi tillbaka ett response objekt
    // .then (function (response) {
    // //här ska vi få tillbaka en kod 204, behöver alltså inte göra om till json
    // //anropa updateProduct med order_items
    //     order.order_items.map(function (oi) {
    //         console.log("blblb");
    //         updateProduct(oi);
    //     } );
    // });
    // },

    getOrders: function(callback) {
        console.log("in getOrders the new one");
        console.log("baseURL");
        console.log(ordersModel.baseURL+"orders?api_key="+ordersModel.apiKey);
        //fetch(`orders.${baseURL}/orders?orders.${apiKey}`)
        fetch(ordersModel.baseURL+"orders?api_key="+ordersModel.apiKey)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                ordersModel.allOrders = result.data;
                console.log("alla ordrar");
                console.log(ordersModel.allOrders);
                if (callback) {
                    //när jag har fått mitt data anropar den callback som skickats med
                    //i funktionsanropet
                    //denna kommer nu anropa drawElements som är min callback som jag
                    //skickade med i anropet från
                    //orderView.getOrders(drawElements)
                    //console.log("call");
                    //menuView.showNavBar("Order");

                    callback(result.data);
                }
                console.log(result.data);
                //console.log("hiopp");
                //console.log(result.data[0].id);
            });
    },


};

export default ordersModel;
