
"use strict";
import m from 'mithril';
import trafficModel from "../models/trafficModel.js";
import "leaflet/dist/leaflet.css";
let count = 0;

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
        
        console.log("noooow trafficModel.allDelays");
        // console.log(trafficModel.allDelays);

        return m("div.card", [
            m("p.card-title", "Information tågstation"),
            // m("p.card-info", "Short Name: " + current.name),
            m("p.card-info", "Station Name: " + current.data.AdvertisedLocationName),


            m("a.green-button", {
                href: `#!/delayDetails/${addressObj.key1}`
            }, " Detaljer "),

            m("p"),



            m("a.green-button", {
                href: `#!/stationDetails/${locationName}`
            }, " Visa karta "),
            m("p"),

        ]);
    }
};
//
// function getEstimatedDelays() {
//     console.log("here the delay time is calculated");
//     console.log(trafficModel.allDelays);
// };

//
// const allDelayedStations = {
//     view: function () {
//         console.log("in allDelayedStations now hooho")
//         // var uniqueStations = trafficModel.onlyStations.filter((v, i, a) => a.indexOf(v) === i); 
//         // uniqueStations.forEach(element => console.log(element));

//         var uniqueLocSign = trafficModel.allDelayedLocSign.filter((v, i, a) => a.indexOf(v) === i);
//         console.log("uniqueLocSign in allDelayedStations: " + uniqueLocSign);
//         console.log("onlyStations");
//         console.log(typeof trafficModel.onlyStations);
//         console.log("now iterate through all uniqueLocSign - the shortname for a station");

//         // uniqueLocSign.forEach(element => delays.getStationName(element));
//         let myResult = [];
//         for (let index = 0; index < uniqueLocSign.length; ++index) {
//             const element = uniqueLocSign[index];
//             console.log(element);
//             console.log("print object");
//             myResult.push(delays.getStationName(element));
//             console.log(myResult);
//         }


//         return uniqueLocSign.map(function (station) {
//             // m("p", uniqueLocSign.map(function(delays) {

//             return "fake";

//         });
//     }
// };

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
                    // m("a.red-button", {
                    //     href: `#!/heatView`
                    // }, " heat map som visar alla förseningar"),
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

                        m(stationList)
                    ]);
                }))
            ]),
        ]);
    }

};

// export default orderList;
export { delays };


