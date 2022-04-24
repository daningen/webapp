// import m from "mithril";

// import L from "leaflet";
// import {OpenStreetMapProvider} from "leaflet-geosearch";
// import "leaflet/dist/leaflet.css";
// import orders from "../models/orders";

import trafficModel from "../models/trafficModel";


// import position from "../models/position.js";

// import locationIcon from "../../location.png";
// import "leaflet/dist/images/marker-icon-2x.png";
// import "leaflet/dist/images/marker-icon.png";
// import "leaflet/dist/images/marker-shadow.png";


// let map;
// let geosearch;

// här skapar jag kartan
// function showMap () {
//     console.log("in showMap, nedan talar om var kartan ska vara inzoomad, nedan Karlskrona, behöver sättas dynamiskt");
//     map = L.map("map").setView([56.160817, 15.586703], 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: `&copy;
//         <a href="https://www.openstreetmap.org/copyright">
//         OpenStreetMap</a> contributors`
//     }).addTo(map);

//     let geosearch = new OpenStreetMapProvider();

// }
//asynkron query
// function renderMarker () {
//     console.log("current address to lookup in renderMarker:");
//     console.log(orders.currentAddress)
//     geosearch
//         .search({query:orders.currentAddress})
//         .then(function (result) {
            
//             console.log(result);
//             // if (result.length > 0) {
//             //     L.marker([result[0].y, result[0].x]).addTo(map);
//             // }
//             console("result in renderMarker");
//             console.log(result);
//             L.marker([56.160817.y, 15.586703.x]).addTo(map);
//         });

// }

// function renderMarker() {
//     console.log("currentAddress in renderMarker");
//     console.log(orders.currentAddress);
//     console.log(typeof orders.currentAddress);
//     geocoder
//         .search({ query: orders.currentAddress})
//         .then(function (result) {
//             console.log("the result in renderMarker");
//             console.log(result);


//             if (result.length > 0) {
//                 console.log("yes there is a result");
//                 console.log("the result coordinates:" + [result[0].y, result[0].x]);
//                 //skicka kordinater till show så att kartan fokuserar
//                 L.marker([result[0].y, result[0].x]).addTo(map);

//                 //denna sätter fokus på kartan
//                 map.setView([result[0].y, result[0].x], 13);
//             } else {
//                 console.log("sorry");
//             }
//         });
// }


let trafficInfo = {
    //oninit direkt när en vy anropas  innan vi har något
    
    oninit: function (vnode) {
        trafficModel.getStations(vnode.attrs.id);
    },
    view: function () {
        //nedan checkar om adress är satt och i så fall lägg ut en markör
        // if (orders.currentAddress) {
            // 
            // console.log("olalala this is orders.currentAddress");
            // console.log(orders.currentAddress);
            //funkar ej att anropa denna
            // renderMarker();
        // }
        return m("main.container", [
            m("h1" , "trafik"),
            m("p", "hoppla trafiken"),
            // m("p", orders.currentOrder.name),
            // m("p", orders.currentAddress),
            // m("div#map.map", "")
        ]);

    },
    //leaflet behöver en existerande div innan den kan ritas ut därför oncreate
    // oncreate: showMap,
    // onremove: function () {
    //     //töm denna när jag lämnar vyn och htmlkod förstörs, används i markering så att jag blir av med den som sattes vid första uppritningen 
    //     orders.currentAddress = "";
    // }
};

    

export { trafficInfo };
