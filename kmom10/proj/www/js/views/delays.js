
"use strict";
import m from 'mithril';
import trafficModel from "../models/trafficModel.js";
//start
// import L from "leaflet";
// import {OpenStreetMapProvider} from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
// import orders from "../models/orders";
let count = 0;
// let favorites = []; //denna flyttar jag till models sen





//oninit gör att deliveries.getDeliveries initieras så att jag får data
console.log("xxxxx");

//


const addFavorites = {
    view: function () {
        console.log("reeroih");
    }
}

const stationList = {
    view: function () {
        return trafficModel.allDelayedLocSignStation.map(function (station) {
            return m(stationComponent, station);
        });
    }
};

// const getEstimatedDelays = {
//     view: function() {
//         console.log("here the delay time is calculated");
//         console.log(trafficModel.allDelays);


//     }
// },

// function getEstimatedDelays () {
//     console.log("here the delay time is calculated");
//     console.log(trafficModel.allDelays);
// };

let meal_count = 1;
function eat(ww) {
    console.log("hiooop");
    meal_count++;
    console.log(meal_count);
    console.log(ww);
};
function updateText(text) {
    console.log(text);
}

// function myFunction(newObj) {
//     console.log("reeroih");
//     count + " clicks";
//     console.log(count);
//     console.log(newObj);
//     console.log("changed");
//     trafficModel.favorites.push(newObj);  
//     console.log("in array favorites now");  
//     console.log(trafficModel.favorites);
// }
const stationComponent = {
    view: function (vnode) {
        let current = vnode.attrs;
        // console.log("current.data");
        // console.log(current.data.Geometry.WGS84);
        // console.log(JSON.stringify(current.data.Geometry.WGS84));
        let cordinates = JSON.stringify(current.data.Geometry.WGS84);

        let locationName = current.data.AdvertisedLocationName;

        let addressObj = {
            key1: current.name,
            key2: current.data.AdvertisedLocationName,
            key3: current.data.Geometry.WGS84
        };
        // trafficModel.addressObj = addressObj;

        // console.log("whats in the addressObj");
        // console.log(addressObj);
        console.log("noooow trafficModel.allDelays");
        // console.log(trafficModel.allDelays);



        return m("div.card", [
            m("p.card-title", "Information tågstation"),
            // m("p.card-info", "Short Name: " + current.name),
            m("p.card-info", "Station Name: " + current.data.AdvertisedLocationName),


            // m("button", {
            // 	// onclick: function() {count++},//denna ökar med 1 på knappen
            //     onclick: function() {myFunction(addressObj)},


            // }, count + " clicks"),

            // m("button", {
            //     onclick: function() { updateText('Horse')}}),





            //    m("button", {onclick: eat}, ""+meal_count+" antal favoritklick!"),

            //     m(m.route.Link, {
            //         href: '/favorites', className: 'button' 
            //       }, 'Gå till favoriter'),



            // m("p.card-info", "Map: " + cordinates),

            m("a.green-button", {
                href: `#!/delayDetails/${addressObj.key1}`
            }, " Detaljer "),

            m("p"),



            m("a.green-button", {
                href: `#!/stationDetails/${locationName}`
            }, " Visa karta "),

            m("p"),
            // m("i.material-icons", "favorite_border"),
            // m("p"),



            // m("a.blue-button.button.full-width-button", { 
            //         href: "#!/orders/1295" }, "Visa karta"),
            //         m("div#map.map", "")

        ]);
    }
};
//
function getEstimatedDelays() {
    console.log("here the delay time is calculated");
    console.log(trafficModel.allDelays);
};

//
const allDelayedStations = {
    view: function () {
        console.log("in allDelayedStations now hooho")
        // var uniqueStations = trafficModel.onlyStations.filter((v, i, a) => a.indexOf(v) === i); 
        // uniqueStations.forEach(element => console.log(element));

        var uniqueLocSign = trafficModel.allDelayedLocSign.filter((v, i, a) => a.indexOf(v) === i);
        console.log("uniqueLocSign in allDelayedStations: " + uniqueLocSign);
        console.log("onlyStations");
        console.log(typeof trafficModel.onlyStations);
        console.log("now iterate through all uniqueLocSign - the shortname for a station");

        // uniqueLocSign.forEach(element => delays.getStationName(element));
        let myResult = [];
        for (let index = 0; index < uniqueLocSign.length; ++index) {
            const element = uniqueLocSign[index];
            console.log(element);
            console.log("print object");
            myResult.push(delays.getStationName(element));
            console.log(myResult);
        }

        // employees.push(employee);

        // for (var i = 0; i < uniqueLocSign.length; i++) {
        //     console.log(uniqueLocSign[i]);
        //     //Do something
        //     getStationName(uniqueLocSign[i]);
        // }

        return uniqueLocSign.map(function (station) {
            // m("p", uniqueLocSign.map(function(delays) {

            return "fake";

        });
    }
};

let delays = {

    oninit: async function func() {
        await trafficModel.getStations();
        return await trafficModel.getDelays();

    },

    view: function (vnode) {
        console.log("in views/delayed, type of allDelayedLocSign is");
        console.log("map the stations against unique shortnames in allDelayedLocSign or vice verse, in views/delays.js");

        // console.log(trafficModel.allDelayedLocSign);
        // console.log(trafficModel.allStations[0]);
        // console.log(trafficModel.allStations[1]);

        var uniqueLocSign = trafficModel.allDelayedLocSign.filter((v, i, a) => a.indexOf(v) === i);
        console.log("uniqueLocSign: " + uniqueLocSign);
        

        return m("div.slide-in" + vnode.attrs.id, [
            //return m(vnode.attrs.id, [
            //     return m("a", {href: `#!/orders/${order.id}`},  order.name);
            // m("h1", "Alla förseningar"),
            m("ul.inventory", [
                m("p", [
                    // m("div.box", "Station"),
                    // m("div.box", "Namn"),
                ]),
                m("div.container",
                    m("br"),
                    m("a.red-button", {
                        href: `#!/heatView`
                    }, " heat map som visar alla förseningar"),
                    // console.log("fck"),
                ),
                console.log(trafficModel.allDelayedLocSignStation),
                // console.log(trafficModel.allDelayedLocSign),
                // m("p", trafficModel.allDelayedLocSign.map(function(delays) {
                m("h1", "Alla förseningar idag"),
                m("p", uniqueLocSign.map(function (delays) {
                    return m("p", {


                        // href: `#!/delays/${delays[0]}`,
                        // href: `#!/delays/${delays}`,
                        href: `#!/delays/${delays.name}`,
                       
                       
                        oncreate: m.route.link
                    }, [

                        // m("p.hover", `${order.id}`),
                        // m("a", {href: `#!/stations${delays.FromLocation}`},  delays.FromLocation),
                        // m("a", {href: `#!/orders/${order.id}`},  order.name)
                        // m("p.hover", delays[1])
                        // m("p.hover", delays)
                        // m(allDelayedStations) 
                        m(stationList)
                    ]);
                }))
            ]),
        ]);
    }

};

// export default orderList;
export { delays };


