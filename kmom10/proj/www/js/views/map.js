"use strict";

import m from "mithril";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import position from "../models/position.js";

import locationIcon from "../../location.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
// import { login } from "./login.js";
import trafficModel from "../models/trafficModel.js";

var map;
var locationMarker = L.icon({
    iconUrl: locationIcon,
    iconSize:     [24, 24],
    iconAnchor:   [12, 12],
    popupAnchor:  [0, 0]
});

function getCordinate(cordString) {
    console.log("now;");
    console.log(cordString);
    // console.log("mySplit");
    //       console.log(typeof mySplit);
    //       console.log(mySplit);

          let myArray2 = cordString.split(" ");
          console.log(myArray2[0]);
          console.log(myArray2[1]);
          console.log(myArray2[2]);
          let cordY = myArray2[1];
          console.log(cordY);
          cordY = cordY.replace(/[\|&;\$%@"<>\(\)\+,]/g, "");
          let cordX = myArray2[2];
          cordX = cordX.replace(/[\|&;\$%@"<>\(\)\+,]/g, "");

          
          cordX = cordX.slice(0, -1); 
          console.log("cordY " + cordY);
          console.log("cordX " + cordX);
          console.log("type cordX");
          console.log(typeof cordX);
          
          let parsedCordY = parseFloat(cordY).toFixed(5);
          let parsedCordX = parseFloat(cordX).toFixed(5);
          
          let arr1 = [parsedCordX];
          let arr2 = [parsedCordY];
          
          let concatX_Y = arr1.concat(arr2);
          let concat_cordx_y = [];
          console.log("the type to return?");
          console.log(typeof concatX_Y);
          console.log(concatX_Y);
          


          return concatX_Y;
          
        //   return arrayOfNumbers;
};
// };

function showMap() {
    console.log("tjolahoppa");
    console.log(trafficModel.allLocSignObj);
    //object to contain all delayed traffic places with its coordinates 
    let places2 = {};
    // let cordArray = [];
    console.log(typeof cordArray);
    // let places3 = [];
                    

    let obj = trafficModel.allDelayedLocSignStation;
    let cordString = 0;
        for (var key in obj) {
            var value = obj[key];
            if (obj.hasOwnProperty(key)) {
                // if (key == shortName) {
                    // console.log("hit in setStationName");
                    // console.log(key + " -> " + obj[key]);
                    // console.log(obj[key]);
                    console.log(obj[key].data.AdvertisedLocationName);
                    console.log(obj[key].data.Geometry.WGS84);
                    cordString = obj[key].data.Geometry.WGS84;
                    let cordArray = getCordinate(cordString);
                    places2[obj[key].data.AdvertisedLocationName] = cordArray;
                    // places3.push(obj[key].data.AdvertisedLocationName);
            
                    console.log("cordArray");
                    console.log(cordArray);
                    console.log(typeof cordArray);
                    
                    // console.log(obj[key].AdvertisedLocationName);
                    // console.log(obj[key].Geometry);
                // }
                
            }
            
        }
        
       
        // console.log("now call getCordinate");
        //     getCordinate(cordString);
        //     console.log(getCordinate(cordString));
            // places2[obj[key].data.AdvertisedLocationName] = firstKeyValue;
            // places2.name = key;
            //         stationData.data = obj[key];
            //         trafficModel.allDelayedLocSignStation.push(stationData);


    // console.log(trafficModel.allDelayedLocSignStation);
    var places = {
        "Kungsängen": ["59.47812", "17.75283"],
        "BTH": [ 56.181932, 15.590525 ],
        // "Alingsås": [ 57.9269051699342, 12.53218546120595 ],
        // "Köpenhamn H": [55.6761115476888, 12.568332091787717],
        // "Stortorget": [ 56.160817, 15.586703 ],
        // "Hoglands Park": [ 56.164077, 15.585887 ],
        // "Rödebybacken": [ 56.261121, 15.628609 ]
    };

    console.log("show object places2");
        console.log(places2);
        console.log("show object places");
        console.log(places);
    
    // for (var place in places) {
    //         console.log("the place");
    //         console.log(place);
    // }

    // for (var place in places2) {
    //     console.log("the place2");
    //     console.log(place);
    // }


    // map = L.map('map').setView(places["BTH"], 5);
    map = L.map('map').setView(places["Kungsängen"], 6);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    for (var place in places2) {
        // console.log("the place");
        // console.log(place);
        if (Object.prototype.hasOwnProperty.call(places2, place)) {
            L.marker(places2[place]).addTo(map).bindPopup(place);
        }
    }

    var geocoder = new OpenStreetMapProvider();

    // var addresses = [
    //     "Bastionsgatan 1, Karlskrona",
    //     "Kärleksstigen 1, Karlskrona"
    // ];

    // for (var i = 0; i < addresses.length; i++) {
    //     geocoder
    //         .search({ query: addresses[i] })
    //         .then(function(result) {
    //             if (result.length > 0) {
    //                 L.marker(
    //                     [result[0].y, result[0].x]
    //                 ).addTo(map).bindPopup(result[0].label);
    //             }
    //         });
    // }
}

function showPosition() {
    if (position.currentPosition.latitude && position.currentPosition.longitude) {
        L.marker(
            [
                position.currentPosition.latitude,
                position.currentPosition.longitude
            ],
            {
                icon: locationMarker
            }
        ).addTo(map).bindPopup("Din plats");
    }
}

const mapView = {
    oninit: position.getPosition,
    
    
    oncreate: function() {
        showMap();
    },
    view: function() {
        showPosition();
        return [
            m("h1", "Map - visar alla tågförseningar"),
            m("div#map.map", "")
        ];
    }
};

export default mapView;
