import m from 'mithril';

import auth  from "../models/auth.js";

let login = {
    oninit: auth.clear,
    view: function() {
        
        return m("div.container",
            m("h2", "Logga in här"),
            m("p", "Finns en registrerad användare: dan@e.se, Lösenord: test123"),
            m("p", {style: {color: "red"}}, auth.msg),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    auth.login();
                    isLoggedIn = true
                    m.route.set("/stationList")
                } }, [
                m("label.input-label", "E-post"),
                m("input.input[type=email][placeholder=E-post]", {
                    oninput: function (e) {
                        auth.email = e.target.value;
                    },
                    value: auth.email
                }),
                m("label.input-label", "Lösenord"),
                m("input.input[type=password][placeholder=Lösenord]", {
                    oninput: function (e) {
                        auth.password = e.target.value;
                    },
                    value: auth.password
                }),
                m("input.button.green-button[type=submit][value=Logga in].button", "Logga in"),
                
            ]));
            
    }
};

export { login };
