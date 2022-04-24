"use strict";

import m from 'mithril';

let navigation = {
    view: function(vnode) {
        return [

            m("nav.top-nav",
                { textContent: "Infinity Warehouses", }),
            m("main.container", vnode.children),

            m("nav.bottom-nav", [
                m("a", {
                    href: "/", oncreate: m.route.link
                }, [
                    m("i.material-icons", "home"),
                    "Hem"
                ]),

                m("a", {
                    href: "/listInleverans", oncreate: m.route.link
                }, [
                    m("i.material-icons", "shopping_cart"),
                    "Inleverans"
                ])

            ])

        ];
    }
};

export default navigation;
