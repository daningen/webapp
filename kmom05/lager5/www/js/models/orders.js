import m from "mithril";
import authorization from './authorization.js';

var orders = {
    baseURL: "https://lager.emilfolino.se/v2",
    api_key: "8e4ce3ab696d336c288e8d094260e759",

    //lagra samtliga ordrar i denna
    currentOrders: [],
    //hämta specifik order
    getOrder: function (id) {
        return m.request({
            method: "GET",
            url: `${orders.baseURL}/orders/${id}?api_key=${orders.api_key}`
        }).then(function (result) {
            orders.curr = result.data;
        });
    },

    //hämta allt ordrar och lägg resultatet i orders.currentOrders
    getOrders: function() {
        console.log("in getOrders");
        return m.request({
            //url: `${authorization.baseURL}/orders?api_key=${authorization.payload.api_key}`,
            url: `${orders.baseURL}/orders?api_key=${orders.api_key}`,
            method: "GET"
        }).then(function(result) {
            orders.currentOrders = result.data;
            console.log("the current orders");
            console.log(orders.currentOrders);
            orders.currentOrders.unshift({name: "Pick an order"});
        });
    },
    currentOrder: {},
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
