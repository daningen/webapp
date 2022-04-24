"use strict";

import m from 'mithril';


let authorization = {
    baseURL: "https://lager.emilfolino.se/v2",
    token: "",
    email: "",
    password: "",
    api_key: "8e4ce3ab696d336c288e8d094260e759",


    payload: {
        //token: "",
        email: "",
        password: "",
        api_key: "8e4ce3ab696d336c288e8d094260e759"
    },
    clear: function () {
        console.log("reset på pwd"),
        authorization.payload.email = "",
        authorization.payload.password = "",
        console.log(authorization.payload);
        console.log("reset done");
    },

    //registrera först en användare och därefter login formulär
    register: function () {
        console.log("registrera ny användare med följande uppg");
        console.log(authorization.payload);
        return m.request({

            //api_key: "8e4ce3ab696d336c288e8d094260e759",
            //url: `${authorization.baseURL}/auth/register`,
            method: "POST",
            url: "https://xml-proxy.emilfolino.se/" + `https:lager.emilfolino.se/v2/auth/register`,
            // url: `${authorization.baseURL}/auth/register`,
            //url: "https://lager.emilfolino.se/v2/auth/register",
            data: authorization.payload

            //data: authorization.payload
        }).then(function (result) {
            console.log(result);
            // console.log("hur gick det?");
            
        // }).then(function () {
            console.log("go to login page");
            m.route.set("/loginForm");
            // return m.route.set("/loginForm");
        }).catch(function(error) {
            console.log(error.message);
        });
    },

    // login: function () {
    //     console.log("in model login function, kolla om token är satt");
    //     console.log(authorization.token);

    //     return m.request({
    //     //     //url: `${authorization.mainUrl}/auth/login`,
    //         url: `${authorization.baseURL}/auth/login`,
    //         // url: "https://xml-proxy.emilfolino.se/" + `https://lager.emilfolino.se/v2/auth/login`,
    //         // url: "https://lager.emilfolino.se/v2/auth/login",
    //         method: "POST",
    //         //
    //         data: authorization.payload,

    //     }).then(function(result) {
    //         console.log("result from login: ");
    //         console.log(result);
    //         console.log("token from login: ");

    //         authorization.token = result.data.token;
    //         console.log(authorization.token);
    //     }).then(function() {
    //         //to invoices efter login
    //         console.log("route to invoices");
    //         m.route.set("/invoices");
    //         //m.route.set("/status");
    //     }).catch(function(error) {
    //         console.log(error.message);
    //     });
    // }

    login: function() {
        return m.request({
            method: "POST",
            // url: `${authorization.mainUrl}/auth/login`,
            url: "https://lager.emilfolino.se/v2/auth/login",
            body: {
                // authorization.payload
                api_key: "8e4ce3ab696d336c288e8d094260e759",
                email: "t@t.se",
                // email: authorization.email,
                // password: authorization.password
                password: "test123"
            }
        }).then(function(result) {
            console.log("the result: ");
            console.log(result);
            // authorization.email = "";
            // authautorization.password = "";

            authorization.token = result.data.token;

            // return m.route.set("/");
            m.route.set("/invoices");
        });
    }


};

export default authorization;
