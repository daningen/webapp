"use strict";

import m from "mithril";
import L from "leaflet";
import * as HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap/leaflet-heatmap';
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


var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 2,
    "maxOpacity": .8, 
    // scales the radius based on map zoom
    "scaleRadius": true, 
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };


function getCordinate(cordString) {
    console.log("now;");
    console.log(cordString);
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
};


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

    var places = {
        "Kungsängen": ["59.47812", "17.75283"],
        "BTH": [ 56.181932, 15.590525 ],
        // "Alingsås": [ 57.9269051699342, 12.53218546120595 ],
    };

    console.log("show object places2");
        console.log(places2);
        console.log("show object places");
        console.log(places);
    
    
    var baseLayer = L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
          maxZoom: 18
        }
      );

      

    //   map = new L.Map('map', {
    //     center: new L.LatLng(25.6586, -80.3568),
    //     zoom: 4,
    //     layers: [baseLayer, heatmapLayer]
    //   });

    var heatmapLayer = new HeatmapOverlay(cfg);
    map = new L.map('map', {
        // center: new L.LatLng(25.6586, -80.3568),
        center: new L.LatLng(59.1930, 17.4765),
        zoom: 7,
        layers: [baseLayer, heatmapLayer]
      });

    let heat = L.heatLayer([
        [50.5, 30.5, 0.2], // lat, lng, intensity
        [50.6, 30.4, 0.5],
        [59.19, 17.47, 0.5],
        [56.181932, 15.590525],
    ], {radius: 25,
        minOpacity: 0.4,
        gradient: {0.4: 'blue', 0.5: 'lime', 0.6: 'red'}
    }).addTo(map);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    //nedan sätter jag ut markeringar på kartan med heatlayer
    for (var place in places2) {
        console.log("the place");
        console.log(place);
        if (Object.prototype.hasOwnProperty.call(places2, place)) {
            // L.marker(places2[place]).addTo(map).bindPopup(place);
            // L.marker(places2[place]).addTo(map);
            //
            heat = L.heatLayer([
                places2[place], 
            ], {radius: 25,
                minOpacity: 0.4,
                gradient: {0.3: 'blue', 0.4: 'lime', 0.3: 'red'}
            }).addTo(map);
            //
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

const heatView = {
    oninit: position.getPosition,
    
    
    
    oncreate: function() {
        showMap();
    },

    // onredraw: function() {
    //     // 
    //     // position.getPosition,
    //     // showPosition();
    //     // showMap();
    //     console.log("onredraw");
    //     return [
    //         m("h1", "Heat Map - alla tågförseningar"),
    //         m("div#map.map", "")
    //     ];
    // },

    view: function() {
        showPosition();
        console.log("in view");
        return [
            m("div.container",
            m("h1", "Heat Map - visar alla tågförseningar"),
            m("div#map.map", ""))
        ];
    }
};

export default heatView;