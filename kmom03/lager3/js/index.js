"use strict";

import m from 'mithril';
import { listInleverans } from "./views/list_inleverans.js";
import { home } from "./views/home.js";
import { nyInleverans } from "./views/nyInleverans.js";
import navigation from './views/navigation.js';


m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(navigation, m(home));
        }
    },
    "/listInleverans": {
        render: function() {
            return  m(navigation, m(listInleverans));
        }
    },
    "/nyinleverans": {
        render: function() {
            return  m(navigation, m(nyInleverans));
        }
    }
});
