"use strict";

import m from 'mithril';
//här vill jag få med id från min routegemensam layout för alla mina vyer
const layout = {
    view: function(vnode) {
        //här kan man även lägga till header och footer
        return m("main.container", [
            m("div", vnode.children)
        ]);
    }
};

export { layout };
