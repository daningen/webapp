import m from "mithril";
import authorization from './authorization.js';
import {baseURL, apiKey} from '../vars.js';

let orders = {
    url: `${baseURL}/orders`,
    // api_key: "8e4ce3ab696d336c288e8d094260e759",

    //lagra samtliga ordrar i denna
    currentOrders: [],
    //hämta specifik order
    getOrder: function (orderId) {
        return m.request({
            method: "GET",
            // url: `${baseURL}/orders/${id}?api_key=${apiKey}`
            url: `${orders.url}/${orderId}?api_key=${apiKey}`,
        }).then(function (result) {
            orders.currentOrder = result.data;
            orders.currentAddress = `${result.data.address}, ${result.data.city}, ${result.data.country}`;
            console.log("current orders;");
            console.log(orders.currentOrder);
            console.log("current address;");
            console.log(orders.currentAddress);
        });
    },

    getReadyToSendOrders: function() {
        return m.request({
            method: "GET",
            url: `${orders.url}?api_key=${apiKey}`
        }).then(function(result) {
            //orders.ordersReadyToSend = result.data.filter(function(order) {
            console.log("getReadyToSendOrders model");
            orders.currentOrders= result.data.filter(function(order) {
                return order.status_id >= 200;
            });

            //console.log(orders.ordersReadyToSend);
            console.log("currentOrders;");
            console.log(orders.currentOrders);
        });
    },

    
    currentOrder: {},
    currentAddress: {},
    save: function () {
        console.log(orders.currentOrders);
    },
    getTotalPrice: function (order) {
        var totalPrice = 0;

        order.order_items.forEach(function (product) {
            totalPrice += (product.amount * product.price);
        });
        return totalPrice;
    },


    sendInvoice: function () {
        var order = orders.curr;

        console.log("the token is in sendInvoice");
        console.log(authorization.token);

        order.api_key = authorization.payload.api_key;
        order.status_id = "600";
        return m.request({
            method: 'PUT',
            url: `${authorization.baseURL}/orders`,
            data: order
        }).then(function() {
            order.total_price = orders.getTotalPrice(order);
            order.creation_date = orders.getDate();
            order.due_date = orders.getDate(30);
            order.order_id = order.id;
            return m.request({
                method: 'POST',
                url: `${authorization.baseURL}/invoices`,
                data: order,
                headers: {
                    'x-access-token': authorization.token
                }
            });
        }).then(function () {
            m.route.set("/invoices");
        });
    },

    getDate: function (days = 0) {
        var d = new Date();

        d.setDate(d.getDate() + days);
        return d.getFullYear() + "-" +
            (d.getMonth() + 1 > 9 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)) + "-" +
            (d.getDate() > 9 ? d.getDate() : "0" + d.getDate());
    }

};

export default orders;
