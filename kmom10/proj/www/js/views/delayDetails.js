
"use strict";
import m from 'mithril';
import trafficModel from "../models/trafficModel.js";
//start
// import L from "leaflet";
// import {OpenStreetMapProvider} from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import { login } from './login.js';
// import orders from "../models/orders";
let count = 0;
// let favorites = []; //denna flyttar jag till models sen





//oninit gör att deliveries.getDeliveries initieras så att jag får data
console.log("xxxxx");

//


// const addFavorites = {
//     view: function () {
//         console.log("reeroih");
//     }
// }

// const stationList = {
//     view: function () {
//         return trafficModel.allDelayedLocSignStation.map(function (station) {
//             return m(stationComponent, station);
//         });
//     }
// };

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

// let meal_count = 1;
// function eat(ww) {
//     console.log("hiooop");
//     meal_count++;
//     console.log(meal_count);
//     console.log(ww);
// };
// function updateText(text) {
//     console.log(text);
// }

//*

//denn
function getDetailsX(shortName) {
    console.log("in getDetailsX");
    // console.log(trafficModel.delayDetails);
    // const result = trafficModel.delayDetails.filter(element => element.from == shortName);

    var filter = "from";
    var keyword = shortName;
    console.log("keyword");
    console.log(keyword);

    var filteredArray = trafficModel.delayDetails.filter((item) => item[filter] === keyword);
    console.log(filteredArray);

    return filteredArray.map(function (shortName) {
        return m(detailComponent, shortName);
    });
};

function getLongName(shortName) {
    console.log("in getLongName");
    let filter = "name";
    let keyword = shortName;
    console.log("keyword");
    console.log(keyword);
    console.log("what length");
    console.log(keyword.length);


    console.log(trafficModel.allDelayedLocSignStation);
    let filteredArray = trafficModel.allDelayedLocSignStation.filter((item) => item[filter] == keyword);
    console.log(filteredArray);
    console.log(filteredArray[0].data.AdvertisedLocationName);
    let longName = filteredArray[0].data.AdvertisedLocationName;
    return longName;
};
function getTheTime(theDate) {

    //input = 2022-04-17T11:43:00.000+02:00
    console.log("Time");
    // console.log(typeof theTime);
    console.log(theDate);
    // let formTime = "";
    let formDate = theDate.replace("T", " Tid: ");
    console.log(formDate);
    formDate = formDate.split('.')[0];
    console.log(formDate);
    return formDate;
};

// const cakeList = {
//     view: function() {
//         return trafficModel.delayDetails.map(function(delay) {
//             return m(detailComponent, delay);
//         });
//     }
// };

const detailComponent = {
    view: function(vnode) {
        let current = vnode.attrs;
        console.log("current");
        console.log(current);
        console.log("vnode.attrs.id to send");
        console.log(vnode.attrs.from);
        // let longNameDeparture = getLongName(vnode.attrs.from);
        // let longNameDest = getLongName(vnode.attrs.to);
        // getTheTime(current.advertisedTime);

        // return m("div.card", [
            return [

            m("p.card-info", "Från: ", getLongName(current.from)),
            // m("p.card-info", "Från: ", longNameDeparture),
            m("p.card-info", "Till: ", getLongName(current.to)),
            // m("p.card-info", "Till: ", longNameDest),
            m("p.card-info", "Ursprunglig tid: ",  getTheTime(current.advertisedTime)),
            m("p.card-info", "Estimerad tid: " + getTheTime(current.estimatedTime)),
            m("p.card-info", "======== " ),

            // m("p.card-info", "Pris: " + current.price + " Lagersaldo: " + current.stock),
            // m("p.card-info", "Lagerplats: " + current.location),
            // m("a.card-info", { href: "#!/form/" + current.id }, "Ändra")
        ];
    }
};


// function getDetails(shortName) {
//     console.log("hoppla in getDet");
    

//     const valueIs = (value) => (object) =>
//         Object.values(object).some((v) => v === value);

        
//         console.log("trafficModel.delayDetails.filter(valueIs(shortName)");    
//     // console.log(trafficModel.delayDetails.filter(valueIs(shortName)));

//     let theResult = trafficModel.delayDetails.filter(valueIs(shortName));
//     console.log("theResult");
//     console.log(theResult);

  

//     // return "theResult";

//     return m(detailComponent, theResult);

// }



//     // if (res == "försening") {
//     //     result = m("p", { style: { border: "1px solid red", width: " fit-content", padding: "10px", color: "red" } }, `${res}`);

//     // } else {
//     //     result = m("p", { style: { border: "1px solid green", width: " fit-content", padding: "10px", color: "green" } }, `${res}`);

//     // }

//     console.log("returning result: " + result);
//     return "result";
// };



//*

// const stationComponent = {
//     view: function (vnode) {
//         let current = vnode.attrs;
//         // console.log("current.data");
//         // console.log(current.data.Geometry.WGS84);
//         // console.log(JSON.stringify(current.data.Geometry.WGS84));
//         let cordinates = JSON.stringify(current.data.Geometry.WGS84);

//         let locationName = current.data.AdvertisedLocationName;

//         let addressObj = {
//             key1: current.name,
//             key2: current.data.AdvertisedLocationName,
//             key3: current.data.Geometry.WGS84
//         };

       

//         return m("div.card", [
//             m("p.card-title", "Detaljerad information om förseningar"),
//             // m("p.card-info", "Short Name: " + current.name),
//             // m("p.card-info", "Kort namn: " + current.name),
//             // m("p.card-info", "Station: " + current.data.AdvertisedLocationName),
           
//             // m("p", getDetails(current.name)),
//             console.log("current.name"),
//             console.log(current.name),
//             console.log("vnode.attrs"),
//             console.log(vnode.attrs.name),
            
//             m("p", getDetailsX(vnode.attrs.name)),

//             // m("a.green-button", {
//             //     href: `#!/stationDetails/${locationName}`
//             // }, " Visa karta "),

//             m("p"),

//         ]);
//     }
// };
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
//             return "fake";

//         });
//     }
// };

let delayDetails = {

    // oninit: async function func() {
    //     await trafficModel.getStations();
    //     return await trafficModel.getDelays();

    // },

    // oninit: function (vnode) {
    //     console.log("now oninit");
    //     console.log(vnode.attrs.id);
    // },
        
    //     return m("div.card", [
    //         m("p.card-title", "Detaljerad information om förseningar"),
    //         // m("p.card-info", "Short Name: " + current.name),
    //         // m("p.card-info", "Kort namn: " + current.name),
    //         // m("p.card-info", "Station: " + current.data.AdvertisedLocationName),
           
    //         // m("p", getDetails(current.name)),
            
    //         m("p", getDetailsX(vnode.attrs.id)),

    //         // m("a.green-button", {
    //         //     href: `#!/stationDetails/${locationName}`
    //         // }, " Visa karta "),

    //         m("p"),

    //     ]);
    // },

    view: function (vnode) {
        console.log("in view in delayDetails");
     
        console.log("vnode is");
        console.log(vnode);
        console.log("oooooo vnode.attrs");
        console.log(vnode.attrs.id);

        // console.log(trafficModel.allDelayedLocSign);
        // console.log(trafficModel.allStations[0]);
        // console.log(trafficModel.allStations[1]);

        // var uniqueLocSign = trafficModel.allDelayedLocSign.filter((v, i, a) => a.indexOf(v) === i);
        // console.log("uniqueLocSign: " + uniqueLocSign);

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
                    //testar kommenterar, ta bort denna
                    m("h1","Detaljer om försening"),
                    m("p", getDetailsX(vnode.attrs.id.trim())),
                ),
                // console.log(trafficModel.allDelayedLocSignStation),
                // console.log(trafficModel.allDelayedLocSign),
                // m("p", trafficModel.allDelayedLocSign.map(function(delays) {
                // m("p", uniqueLocSign.map(function (delays) {
                //     return m("p", {


                //         // href: `#!/delays/${delays[0]}`,
                //         href: `#!/delays/${delays}`,
                //         oncreate: m.route.link
                //     }, [
                //         m(stationList)
                //     ]);
                // }))
            ]),
        ]);
    }

};

export { delayDetails };


