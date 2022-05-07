"use strict";
import m from 'mithril';
import trafficModel from "../models/trafficModel.js";
import { login } from './login.js';
//import { menu } from "./menu.js";

let favorites = {


  view: function () {
    var links = [
      { title: "item 1", url: "/item1" },
      { title: "item 2", url: "/item2" },
      { title: "item 3", url: "/item3" }
    ];

    // console.log("trafficModel.favorites");
    // console.log(trafficModel.favorites2);

    function checkDelays(shortName) {
      console.log("checking ShortName");
      console.log(shortName);
      let result = "";
      let res = "i tid";
      // console.log(trafficModel.allDelayedLocSign);
      console.log(trafficModel.allUniqueDelayedLocSign);
      trafficModel.allUniqueDelayedLocSign.map(function (delay) {
        console.log(delay);
        if (delay == shortName) {
          console.log("yes it's there");
          // 
          res = "försening";



          console.log("result: " + result);
          // return result;
        };

        
      });
      
      if (res == "försening") {
        result = m("p", { style: { border: "1px solid red", width: " fit-content", padding: "10px", color: "red" } }, `${res}`);

      } else {
        result = m("p", { style: { border: "1px solid green", width: " fit-content", padding: "10px", color: "green" } }, `${res}`);

      }

      console.log("returning result: " + result);
      return result;
    };

    //remove favorite station
    function removeFavorite(favStation) {
      console.log("favStation to be removed");

      trafficModel.favorites2 = trafficModel.favorites2.filter(function (e) {
        return e.key1 !== favStation;
      });
      console.log("remaining");
      console.log(trafficModel.favorites2);


      //
      console.log(favStation);
      

    }


    return m("div.card", [
      m("p.card-title", "Information tågstation"),
      // m("p.card-info", "Short Name: " + current.name),
      // m("p.card-info", "Station Name: " + "current.data.AdvertisedLocationName"),
      console.log("all favorites"),
      console.log(trafficModel.favorites2),
      trafficModel.favorites2.map(function (delivery) {
        return m("div", [
          m("p", delivery.key2),


          // checkDelays(delivery.key1), //denna funkar också
          // m(checkDelays(delivery.key1)),
          m("p", checkDelays(delivery.key1)),
          

          m("button.delete-button", {
            // onclick: function() {count++},//denna ökar med 1 på knappen
            // onclick: function () { myFunction(favoriteObj), testfunction() },
            onclick: function () { removeFavorite(delivery.key1) },


          }, [
            m("i.material-icons", "delete"),
            m("icon-text", "Ta bort")
          ]),
          m("p"),

          m("a.green-button", {
            href: `#!/stationDetails/${delivery.key2}`
          }, " Visa karta "),

        ]);
      }),

      m("p"),

    ]);

    
  }
};

export { favorites };
