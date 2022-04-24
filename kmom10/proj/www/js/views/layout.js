"use strict";

import m from 'mithril';
// import * as F from '@mithril-icons/font-awesome';
// import { Atlas, AddressBook } from '@mithril-icons/font-awesome/solid';

// import { navigation } from "./navigation.js";
// import authorization from "../models/authorization.js";

let layout = {
    view: function(vnode) {
        console.log("nu i layout vy")
        console.log("vnode");
        console.log(vnode);

        

        //console.log(vnode.children);
        return [
            m("div#header.header",
            // m("nav.top-nav",
            //     { textContent: "Tåginformation ",}),

                //
                m("nav.top-nav",
                [
                    // m("a", {
                    //     href: "/",
                    //     oncreate: m.route.link,
                    //     class: (m.route.get().split("/")[1] == "") ? "selected" : null
                    // }, [
                    //     m("i.material-icons", "home"),
                    //     m("p.icon-text", "Hem")
                    //     //"Inleveranser"
                    // ]),
                    //delays
                    m("a", {
                        href: "#!/favorites",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "favorites") ? "selected" : null
                    }, [
                        m("i.material-icons", "favorite_border"),
                        m("p.icon-text", "Favoriter")
                    ]),
                    //
                   
                    //
                   
                    //heat map
                    m("a", {
                        href: "#!/stations",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "stations") ? "selected" : null
                    }, [
                        m("i.material-icons", "star_rate"),
                        m("p.icon-text", "Alla stationer")
                        //"Inleveranser"
                    ]),

                    // m("a", {
                    //     href: "#!/login",
                    //     oncreate: m.route.link,
                    //     class: (m.route.get().split("/")[1] == "login") ? "selected" : null
                    // }, [
                    //     m("i.material-icons", "star_rate"),
                    //     m("p.icon-text", "logga in")
                    //     //"logga in"
                    // ]),


                    // m("a", {
                    //     href: "#!/regUser",
                    //     oncreate: m.route.link,
                    //     class: (m.route.get().split("/")[1] == "regUser") ? "selected" : null
                    // }, [
                    //     m("i.material-icons", "app_registration"),
                    //     m("p.icon-text", "registrera användare")
                    // ]),


                ])


                ///
                
                // m("ul.  nav", [
                //     m("li", [m("a", { href: "#!/favorites" }, "Mina favoriter")]),
                //     m("li", [m("a", { href: "#!/stations" }, "Alla stationer")])
                // ])
                ),
                // m("nav.top-nav",
                // { textContent: "Tåginformation ",
                // id: "header", }),
                
            m("main.container", vnode.children),
            m("nav.bottom-nav",
                [
                    // m("a", {
                    //     href: "/",
                    //     oncreate: m.route.link,
                    //     class: (m.route.get().split("/")[1] == "") ? "selected" : null
                    // }, [
                    //     m("i.material-icons", "home"),
                    //     m("p.icon-text", "Hem")
                    //     //"Inleveranser"
                    // ]),
                    //delays
                    m("a", {
                        href: "#!/delays",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "delays") ? "selected" : null
                    }, [
                        m("i.material-icons", "train"),
                        m("p.icon-text", "Förseningar")
                    ]),
                    //
                    
                    //
                   
                    //heat map
                    m("a", {
                        href: "#!/heatView",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "heatView") ? "selected" : null
                    }, [
                        m("i.material-icons", "star_rate"),
                        m("p.icon-text", "Heat map")
                        //"Inleveranser"
                    ]),

                    m("a", {
                        href: "#!/login",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "login") ? "selected" : null
                    }, [
                        m("i.material-icons", "star_rate"),
                        m("p.icon-text", "logga in")
                        //"logga in"
                    ]),


                    m("a", {
                        href: "#!/regUser",
                        oncreate: m.route.link,
                        class: (m.route.get().split("/")[1] == "regUser") ? "selected" : null
                    }, [
                        m("i.material-icons", "app_registration"),
                        m("p.icon-text", "registrera användare")
                    ]),


                ])
        ];
    }
};


export  { layout };
