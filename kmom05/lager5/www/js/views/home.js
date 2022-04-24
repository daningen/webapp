"use strict";
import m from 'mithril';
//import { menu } from "./menu.js";

let home = {
    view: function() {
      var links = [
        {title: "item 1", url: "/item1"},
        {title: "item 2", url: "/item2"},
        {title: "item 3", url: "/item3"}
    ];
    
        return [

            m("h2", "Infinity Warehouses home page"),
            m("p", "Welcome to Infinity Warehouses. Where products go to disappear"),

         
          m("a.blue-button.button.full-width-button", {
            href: "#!/login" }, "Logga in"),

            m("p"),
            

            m("a.green-button.button.full-width-button", {
              href: "#!/regUser" }, "Registrera användare"),


        ];
    }
};

export { home };
