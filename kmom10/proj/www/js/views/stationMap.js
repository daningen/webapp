import m from "mithril";

import L, { marker } from "leaflet";
import {OpenStreetMapProvider} from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
// import 'heatmap.js';
// import orders from "../models/orders";




// import position from "../models/position.js";

// import locationIcon from "../../location.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import trafficModel from "../models/trafficModel";




let map;
let geosearch;

// här skapar jag kartan
function showMap () {
        console.log("x is in showMap");
        console.log(trafficModel.currentCordX);
        console.log(trafficModel.currentCordY);
        // console.log();
    console.log("in showMap, nedan talar om var kartan ska vara inzoomad, nedan Karlskrona, behöver sättas dynamiskt");
    // map = L.map("map").setView([56.160817, 15.586703], 13);
    map = L.map("map").setView([trafficModel.currentCordX, trafficModel.currentCordY], 13);

    

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);
    //kan jag ta bort denna?
    geosearch = new OpenStreetMapProvider();

}
// function adding a text when clinking on the marker
let popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at. " +  e.latlng.toString())
//         .openOn(map);
// }

function onMapClick(e) {
    popup = L.popup()
    popup.setLatLng(e.latlng)
    //   popup.setContent("You clicked the map at #{e.latlng}")
    popup.setContent("You clicked the map at. " + e.latlng.toString())
    popup.openOn(map);
    console.log("Coordinate: #{e.latlng}")
}


//
//asynkron query
function renderMarker () {
    geosearch = new OpenStreetMapProvider(); 
    console.log("current address to lookup in renderMarker:");
    console.log(trafficModel.currentSearchAddress);
    let currentAddress = trafficModel.currentSearchAddress[0];
    
    //blablabla
    let time = trafficModel.getEstimatedDelays(trafficModel.currentSearchAddress[0]);
    geosearch
        .search({query:currentAddress})
        // .search({query:orders.currentAddress})
        //nedan resulterar i flera träffar, ej så noga - jag väljer ut en [0]
        .then(function (result) {
            console.log("get estimated time");
            
            console.log("result");
            console.log(result);
            console.log(result[0].y);
            console.log(result[0].x);
            trafficModel.currentCordY = result[0].y;
            trafficModel.currentCordX = result[0].xa;
            if (result.length > 0) {
                L.marker([result[0].y, result[0].x]).addTo(map);
            }
            console.log("result in renderMarker");
            console.log(result);
            map.on('click', onMapClick);

            // let popup = L.popup()
            popup = L.popup()
            popup.setLatLng([result[0].y, result[0].x])
            popup.setContent("Station: " + trafficModel.currentSearchAddress[0] + " Försening: " + trafficModel.delayedMinutes + " min" )
            popup.openOn(map)
            // marker.bindPopup("<b>Du sökte på station: </b><br>").openPopup();
            
         

            
            
            
             
            // L.marker([56.160817.y, 15.586703.x]).addTo(map);
            // L.marker([59.857881697.y, 17.648693.x]).addTo(map);
        });

}


let stationMap = {
    //oninit direkt när en vy anropas  innan vi har något
    
    oninit: function (vnode) {
        console.log("oninit man ");
        //
        let current = vnode.attrs;
        
        let lookupAddress = vnode.attrs.addressObj;
        // console.log(lookupAdress);
        console.log(vnode.attrs);
        
        // console.log(JSON.stringify(vnode.attrs));
        console.table(current);
        // const words = vnode.attrs.split(' ');
        // console.log(words);
        console.log((current.addressObj));
        console.log(JSON.stringify(current));
        

        // console.log(words);
        console.log((current.addressObj));
        console.log(JSON.stringify(current));
        let objString = JSON.stringify(current);
        let splitString = objString.split();
        console.log(typeof splitString);
        console.log(splitString);
        
        
        // console.log(current.data.Geometry.WGS84);
        // console.log(JSON.stringify(current.data.Geometry.WGS84));
        // let cordinates = JSON.stringify(current.data.Geometry.WGS84);

        //
        // console.log(vnode.currentAddress);
        // console.log(vnode.JSON);
        // console.log(vnode.attrs.current);
        // console.log("above vnodeattrs.id");
        // let cordinates = vnode.attrs.id;
        // console.log("cordinates");

        

        // cordinates.replace(/(\[\]')+/g,'');
        // console.log(cordinates);
        // const myArray = cordinates.split(" ");
        // const myCord = cordinates.split("POINT");
        // console.log(myCord);

        // let myLong = myArray[1];
        // myLong = myLong.slice(1);
        // let myLat = myArray[2].slice(0, -1);
        // myLat = myLat.slice(0, -1);

        // console.log(myArray[0]);
        // console.log(myArray[1]);
        // console.log(myArray[2]);

        // console.log(myLong);
        // console.log(myLat);
        // let sendcord = "(" + myLong + " " + myLat +")";
        // console.log("sendcord");
        // console.log(sendcord);


        // console.log(cordinates.substring(2));
        // orders.getOrder(vnode.attrs.id);
        trafficModel.getAddress(`${lookupAddress}`);
    },
    view: function () {
        //nedan checkar om adress är satt och i så fall lägg ut en markör
        console.log("in view, look at trafficModel.addressObj");
        console.log(trafficModel.addressObj);
        let theAddress = trafficModel.addressObj[0];
        console.log("the address:");
        console.log(theAddress);
        
        // if (orders.currentAddress) {
        if (trafficModel.currentSearchAddress) {
            // (13.000229772341523 55.609718195959864) <-dessa vill jag ha in i showmap
            console.log("olalala this is trafficModel.currentAddress");
            console.log(trafficModel.addressObj);
            console.log(trafficModel.currentSearchAddress);
            //funkar ej att anropa denna
            renderMarker();
        }
        return m("main.container", [
            m("h1" , "Karta över aktuell station"),
            m("p", "Beklagar denna försening"),
            m("p", trafficModel.addressObj[0]),
            // m("p", orders.currentAddress),
            console.log("what is the address"),
            console.log(trafficModel.addressObj[0]),
            //denna funkar ej showMap("13.000229772341523 55.609718195959864"),
            m("div#map.map", "")
        ]);

    },
    //leaflet behöver en existerande div innan den kan ritas ut därför oncreate
    oncreate: showMap,
    onremove: function () {
        //töm denna när jag lämnar vyn och htmlkod förstörs, används i markering så att jag blir av med den som sattes vid första uppritningen 
        // orders.currentAddress = "";
        trafficModel.currentAddress = "";
        trafficModel.currentCordX = "";
        trafficModel.currentCordY = "";
    }
};

    

export { stationMap };
