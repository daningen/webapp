"use strict";

import m from 'mithril';
// import { navigation } from "./navigation.js";
// import authorization from "../models/authorization.js";

let layout = {
    view: function(vnode) {
        console.log("nu i layout vy")
        console.log("vnode");
        console.log(vnode);


        //console.log(vnode.children);
        return [
            m("nav.top-nav",
                { textContent: "Infinity Warehouses ", }),
            m("main.container", vnode.children),
            m("nav.bottom-nav",
                [
                    //home
                    m("a", {
                        href: "/",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "") ? "selected" : null
                    }, [
                        m("i.material-icons", "home"),
                        m("p.icon-text", "Hem")
                        //"Inleveranser"
                    ]),

                    m("a", {
                        href: "#!/listInleverans",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "listInleverans") ? "selected" : null
                    }, [
                        m("i.material-icons", "shopping_cart"),
                        m("p.icon-text", "Inleverans")
                        //"Inleveranser"
                    ]),

                    m("a", {
                        href: "#!/invoices",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "invoices") ? "selected" : null
                    }, [
                        m("i.material-icons", "attach_money"),
                        m("p.icon-text", "fakturor")
                        //"Fakturor"
                    ]),

                    m("a", {
                        href: "#!/login",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "login") ? "selected" : null
                    }, [
                        m("i.material-icons", "person"),
                        m("p.icon-text", "logga in")
                        //"logga in"
                    ]),


                ])
        ];
    }
};


export  { layout };
