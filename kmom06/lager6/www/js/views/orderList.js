"use strict";
import m from 'mithril';
import orders from "../models/orders.js";

//oninit gör att deliveries.getDeliveries initieras så att jag får data
console.log("xxxxx");
let orderList = {


    oninit: orders.getReadyToSendOrders,
    view: function (vnode) {
        console.log("in orderList");


        return m("div.slide-in" + vnode.attrs.id, [
        //return m(vnode.attrs.id, [
 //     return m("a", {href: `#!/orders/${order.id}`},  order.name);
            m("h1", "Alla Ordrar"),
            m("ul.inventory", [
                m("li", [
                    m("div.box", "Order id"),
                    m("div.box", "Namn"),
                ]),
                m("p", orders.currentOrders.map(function(order) {
                    return m("li", {

                        href: `#!/orders/${order.id}`,
                        oncreate: m.route.link }, [
 
                        // m("p.hover", `${order.id}`),
                        m("a", {href: `#!/orders/${order.id}`},  order.id),
                        // m("a", {href: `#!/orders/${order.id}`},  order.name)
                        m("p.hover", order.name)
                    ]);
                }))
            ]),
        ]);
    }

};

// export default orderList;
export  { orderList };
