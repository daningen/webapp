"use strict";

import m from 'mithril';

import { list } from "./views/list";
import { year } from "./views/year";

m.route(document.body, "/", {
    "/": list,
    "/year/:year": year
});
