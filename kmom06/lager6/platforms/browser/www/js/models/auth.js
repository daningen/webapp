"use strict";
import m from 'mithril';

// ersätter min gamla auth.js

const auth = {
    baseURL: "https://lager.emilfolino.se/v2",
    token: "",
    email: "",
    password: "",
    apiKey: "8e4ce3ab696d336c288e8d094260e759",

    login: function() {
        console.log("in login xxxxx");
        return m.request({
            method: "POST",
            url: `${auth.baseURL}/auth/login`,
            body: {
                // authorization.payload
                api_key: auth.apiKey,
                email: auth.email,
                password: auth.password
            }
        }).then(function(result) {
            auth.email = "";
            auth.password = "";
            console.log("the result: ");
            console.log(result);

            auth.token = result.data.token;

            // return m.route.set("/");
            m.route.set("/invoices");
        });
    },

    register: function () {
        console.log("registrera ny användare med följande uppg");
        // console.log(authorization.payload);
        return m.request({
            method: "POST",
            url: `${auth.baseURL}/auth/register`,
            body: {
                // authorization.payload
                api_key: auth.apiKey,
                email: auth.email,
                password: auth.password
            }
        }).then(function (result) {
            console.log("hur gick det?");
            console.log(result);
            // 
            
        // }).then(function () {
            console.log("go to login page");
            m.route.set("/login");
            // return m.route.set("/loginForm");
        }).catch(function(error) {
            console.log(error.message);
        });
    },

    // login2: function() {
    //     console.log("in login2 ");
    //     return m.request({
    //         method: "POST",
    //         url: `${auth.baseURL}/auth/login`,
    //         body: {
    //             // authorization.payload
    //             api_key: auth.apiKey,
    //             email: auth.email,
    //             password: auth.password
    //             // email: authorization.email,
    //             // password: authorization.password
    //             // password: "test123"
    //         }
    //     }).then(function(result) {
    //         console.log("the result: ");
    //         console.log(result);
    //         // authorization.email = "";
    //         // authautorization.password = "";

    //         auth.token = result.data.token;

    //         // return m.route.set("/");
    //         m.route.set("/invoices");
    //     });
    // }
};

// export { auth };
export default auth;
