
"use strict";
import m from 'mithril';
import trafficModel from "../models/trafficModel.js";

//oninit gör att deliveries.getDeliveries initieras så att jag får data
console.log("xxxxx");

//add favorites
// function addFavorites(newObj) {
//     console.log("reeroih");
//     count + " clicks";
//     console.log(count);
//     console.log(newObj);
//     console.log("changed");
//     trafficModel.favorites.push(newObj);  
//     console.log("in array favorites now");  
//     console.log(trafficModel.favorites);
// }

let favorite_count = 1;

function testfunction() {
    console.log("testfunction");
    favorite_count++;
};


function allFavorites(ww) {
    console.log("hiooop");
    favorite_count++;
    console.log(favorite_count);
    console.log(ww);
};

//add stations to favorites
function addFavorite(favoriteObj) {
    console.log("hoppla");
    // favorite_count + " clicks";
    // favorite_count++;
    console.log(favorite_count);
    // console.log(shortName);
    console.log("changed");

    

    //
    const index = trafficModel.favorites2.findIndex(object => object.key1 === favoriteObj.key1);

    if (index === -1) {
        trafficModel.favorites2.push(favoriteObj);
        console.log("in array favorites now");
        console.log(trafficModel.favorites2);
    } else {
        console.log("already added to favorites");

    }



    //
    
    
}

let stationList = {
    


    oninit: trafficModel.getStations,
    view: function (vnode) {
        console.log("in stationList");

        return m("div.slide-in" + vnode.attrs.id, [
        //return m(vnode.attrs.id, [
 //     return m("a", {href: `#!/orders/${order.id}`},  order.name);
            m("h1", "Alla stationer"),
            m("ul.inventory", [
                // m("li", [
                //     m("div.box", "Station"),
                //     m("div.box", "Namn"),
                // ]),
                // m("p", "Station"),
                m("p", trafficModel.allStations.map(function(station) {
                    // favoriteObj.key1 = station.LocationSignature;
                    // favoriteObj.key2 = station.AdvertisedLocationName;
                    let favoriteObj = {
                        key1: station.LocationSignature,
                        key2: station.AdvertisedLocationName,
                    };  
                    
                    return m("p", {
                        href: `#!/station/${station.AdvertisedLocationName}`,
                        oncreate: m.route.link }, [
 
                        // m("p.hover", `${order.id}`),
                        m("h1", "Alla stationer"),
                        m("a", {href: `#!/stations${station.AdvertisedLocationName}`},  station.AdvertisedLocationName),
                        // m("a", {href: `#!/orders/${order.id}`},  order.name)
                        m("p.hover", "Kort namn: "+ station.LocationSignature),
                        // m("button", {
                        //     // onclick: function() {count++},//denna ökar med 1 på knappen
                        //     onclick: function() {myFunction(addressObj)},
                        
                        // m("button", {onclick: allFavorites}, ""+favorite_count+" antal favoriter!"),

                        // m("button", {onclick: allFavorites}, ""+favorite_count+" antal favoriter!"),


                            // m("button", {
                            //     // onclick: function() {count++},//denna ökar med 1 på knappen
                            //     // onclick: function () { myFunction(favoriteObj), testfunction() },
                            //     onclick: function () { myFunction(favoriteObj) },


                            // }, favorite_count + " clicks"),

                            m("button.favorite-button", {
                                // onclick: function() {count++},//denna ökar med 1 på knappen
                                // onclick: function () { myFunction(favoriteObj), testfunction() },
                                onclick: function () { addFavorite(favoriteObj) },
                              
                              
                              }, [
                                m("i.material-icons", "favorite_border"),
                                m("icon-text", "Lägg till favorit")
                              ]),


                        // m("a.green-button", {
                        //     href: `#!/favorites}`
                        // }, " mina favoriter "),
                           
                            
                        // }, count + " clicks"),
                    ]);
                }))
            ]),
        ]);
    }

};

// export default orderList;
export  { stationList };


