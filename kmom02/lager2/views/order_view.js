"use strict";
import ordersModel from "../src/orders.js";
import menuView from "./menu_view.js";
//import inventoryCheck from "../src/inventoryCheck.js";

//från youtube ex omkring 53 min

var orderView = (function() {
    //i denna stoppar jag in mina ordrar så behöver jag inte göra api-anrop
    var orderList = [];

    function drawOrderView() {
        //parametern drawElements blir den callback som anropas vid data-träff
        //i funktionen getOrders


        ordersModel.getOrders(drawElements);
    }
    function drawElements(data) {
        //menuView.showNavBar("Order");
        window.mainContainer.innerHTML = '';
        console.log("what is the data in func drawElements?");
        console.log(data);
        orderList = data;
        console.log("draw orderlist in drawElements");
        console.log(orderList);

        //var root = document.getElementById("root");
        //en funktion som tar en funktion som argument
        //console.log("call inventoryCheck");
        //orders.inventoryCheck(orders);
        //elements blir en ny array med innehållet från data.map, därmed ändras inte indata
        var elements = data.map(function(order) {
            var element = document.createElement("p");



            //var amount = document.createElement("p");
            //amount.textContent = " Antal " + order.order_items.length;
            //console.log(order.order_items.length);
            if (order.status_id == 100) {
                console.log("check that status is not 200");
                console.log(order.status_id);
                element.textContent = order.name + ", Antal artiklar " + order.order_items.length;
            }
            console.log("sätter order i navBar till active");
            menuView.showNavBar("shopping_basket");


            window.mainContainer.appendChild(element);
            element.addEventListener("click", function () {
                //drawOrderItems(data);
                element.textContent = order.name;

                window.mainContainer.innerHTML = '';

                var infoOrderItem = document.createElement("div");

                infoOrderItem.innerHTML = element.innerText + "<br />";

                var name = element.innerText;
                var amount = "";
                var stock = "";
                var stockOk = false;

                order.order_items.forEach(function(item) {
                    console.log("the items");
                    console.log(item);

                    //här skriver jag ut hela plocklistan för en beställare
                    console.log("stockOk? " + stockOk);
                    if (amount < stock) {
                        stockOk = true;
                    }

                    amount = item.amount;
                    stock = item.stock;
                    infoOrderItem.innerHTML += item.name + "<br />";
                    infoOrderItem.innerHTML += "Lagerplats: " + item.location + "<br />";
                    infoOrderItem.innerHTML += "Antal: " + item.amount + "<br />";
                    infoOrderItem.innerHTML += "<br />";
                });

                window.mainContainer.appendChild(infoOrderItem);

                var btn = document.createElement("BUTTON");

                btn.className = "button green-button";
                btn.innerHTML = "Beställ";
                window.mainContainer.appendChild(btn);
                console.log(element.innerText);
                console.log("the array for the clicked link");



                btn.addEventListener("click", function() {
                    console.log("order person: " + name);
                    console.log("stock " + stock);
                    console.log("amount " + amount);
                    if (stockOk) {
                        console.log("you can order, time to call updateOrder");
                    }

                    console.log("hello, button clicked");
                    console.log("orderList");
                    console.log(orderList);
                    console.log("the order to send whe button pressed");
                    console.log(order);

                    ordersModel.inventoryCheck(order);
                    //order.updateOrder(order);
                    // if (inventoryCheck(order)) {
                    //     console.log("har nu kollat upp om det finns något i stock");
                    // }

                    //console.log(antalBest + " " + instock);
                });


                // if (order.inventoryCheck(orderList)) {
                //     console.log("har nu kollat upp om det finns något i stock");
                // }

                //console.log("event is " + e);
            });
            return element;
        });

        console.log("the elements");
        console.log(elements);
    }

    // function drawOrderItems(data) {
    //     window.mainContainer.innerHTML = '';
    //     console.log("in drawOrderItems");
    //     console.log(data);
    //
    //     var elements = data.map(function(order) {
    //         console.log(elements);
    //         var element = document.createElement("p");
    //
    //         element.textContent = order.order_items.product_id;
    //         window.mainContainer.appendChild(element);
    //
    //         return element;
    //     });
    // }



    var publicAPI = {
        drawOrderView: drawOrderView

    };

    return publicAPI;
})();

export default orderView;
