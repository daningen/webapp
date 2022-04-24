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

        // result = "{style: {color: red}}, hello";
        // } else {
        //   console.log("nope: " + delay);
        //   result = "i tid";
        //   // console.log("result: " + result);
        //   return;
        // }
      });
      // const found = trafficModel.allUniqueDelayedLocSign.find(element => element == shortName);
      // console.log(found);
      // console.log("returning result: " + result);
      // return result;
      // result = `{style: {border: "1px solid red", color: "green"}},"holw"`;
      // result = m("h1", "Home");
      if (res == "försening") {
        result = m("p", { style: { border: "1px solid red", width: " fit-content", padding: "10px", color: "red" } }, `${res}`);

      } else {
        result = m("p", { style: { border: "1px solid green", width: " fit-content", padding: "10px", color: "green" } }, `${res}`);

      }

      console.log("returning result: " + result);
      return result;
    };

    // function myFunction(favoriteObj) {
    // let favorite_count = 1;
    function removeFavorite(favStation) {
      console.log("hoppla in remove");
      // favorite_count + " clicks";
      // favorite_count++;
      // console.log(favorite_count);
      // console.log(shortName);
      console.log("favStation to be removed");

      //
      // let filterObj = trafficModel.favorites2(item => item.key1 !== favStation);
      // console.log("filtered");
      // console.log(filterObj);

      trafficModel.favorites2 = trafficModel.favorites2.filter(function (e) {
        return e.key1 !== favStation;
      });
      console.log("remaining");
      console.log(trafficModel.favorites2);


      //
      console.log(favStation);
      // trafficModel.favorites2.push(favoriteObj);  
      // console.log("in array favorites now");  
      // console.log(trafficModel.favorites2);


    }

    // for (let index = 0; index < trafficModel.favorites.length; ++index) {
    //   const element = trafficModel.favorites[index];
    //   console.log(element);
    //   console.log(element.key1);
    //   console.log(element.key2);
    //   console.log(element.key3);

    // }
    // let locationName = "Solna";

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
          // m("i.material-icons", "delete"),
          //start

          // m("button", {
          //   // href: "#!/favorites",
          //   // oncreate: m.route.link,
          //   onclick: console.log("kojofd"),
          //   // class: (m.route.get().split("/")[1] == "stations") ? "selected" : null
          // }, [
          //   m("i.material-icons", "delete"),
          // ]),

          m("button.delete-button", {
            // onclick: function() {count++},//denna ökar med 1 på knappen
            // onclick: function () { myFunction(favoriteObj), testfunction() },
            onclick: function () { removeFavorite(delivery.key1) },


          }, [
            m("i.material-icons", "delete"),
            m("icon-text", "Ta bort")
          ]),
          m("p"),



          // m("button", {
          //   class: "i.material-icons",
          //   style: "<delete>",


          //   onclick: console.log("kojofd"),
          //   // onclick: function() {/* ... */},
          //   // oncreate: function() {/* ... */}
          // }),


          //end


          // m("p", {style: {border: "1px solid red", color: "green"}}, checkDelays(delivery.key1)),
          // m("p", {style: {border: "1px solid red", color: "red"}},"hej"),

          m("a.green-button", {
            href: `#!/stationDetails/${delivery.key2}`
          }, " Visa karta "),

          // m("p", delivery.key1 + "p" + delivery.key2)
          // "p" + delivery.key3)
          // + " anländer " + delivery.delivery_date )
        ]);
      }),
      // m("a.green-button", {
      //     href: `#!/stationDetails/${locationName}`
      // }, " Visa karta "),

      m("p"),

    ]);

    // return [

    //     m("h2", "Infinity Warehouses home page"),
    //     m("p", "Welcome to Infinity Warehouses. Where products go to disappear"),


    //   m("a.blue-button.button.full-width-button", {
    //     href: "#!/login" }, "Logga in"),

    //     m("p"),


    //     m("a.green-button.button.full-width-button", {
    //       href: "#!/regUser" }, "Registrera användare"),


    // ];
  }
};

export { favorites };
