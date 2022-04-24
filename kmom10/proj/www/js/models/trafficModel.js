import m from "mithril";
import authorization from './authorization.js';
import { baseURL, apiKey } from '../vars.js';

import { baseURLProj } from '../vars.js';

let trafficModel = {
    // url: `${baseURLProj}stations`,
    url: `${baseURLProj}`,
    // api_key: "8e4ce3ab696d336c288e8d094260e759",



    //lagra samtliga ordrar i denna
    currentOrders: [],
    //lagra alla stationer här
    allStations: [],
    //lagra bara stationsnamnen här
    onlyStations: [],
    //lagra alla förseningar här, skapas i trafficModel.getDelays - anropas i oninit i views/delays
    allDelays: [],
    // lagra all location signatures här, används i uppslag mot stations
    allDelayedLocSign: [],

    //i denna sparar jag alla locationSignature från delays, skapar sedan en med bara unika förekomster i allUniqueLocSign
    allLocSign: [],

    //spara locationSignature(kortnamn) och AdvertisedLocationName(långa namnet) för använda som nyckel till förseningar 
    // locSignAndStation: [],
    longAndShortNameObj: {},

    //spara undan alla unika locationSignatures - filtrerar allDelayedLocSign
    allUniqueDelayedLocSign: [],

    //spara undan både locSignature och AdvertisedLocationName i en array
    allDelayedLocSignStation: [],

    //spara undan alla detaljer för varje försening
    delayDetails: [],

    // delayDetObj: {}, //testar 20220408

    // spara undan alla unika kortnamn som jag sedan kan mappa mot stations
    distinctLocSign: [],
    //i denna sparar jag favoriter som jag vill samla ihop till en användare. Fylls på i delays.js
    favorites: [],

    //i denna sparar jag favoriter som jag vill samla ihop till en användare. Fylls på i stationList.js
    //ska ersätta favorites[]
    favorites2: [],


    allLocSignObj: {},
    addressObj: {},
    //används till att söka upp min adress till kartan
    currentSearchAddress: {},
    currentCordX: 58.596666,
    currentCordY: 16.1831367,
    //visar estimerad försening
    currentTimeStop: 0,
    estimatedTimeAtLocation: 0,
    advertisedTimeAtLocation: 0,
    delayedMinutes: 0,

    //nedan används till att hämta ut addressen för att kunna rita ut kartan
    currentAddress: [],

    getAddress: function (lookupAddress) {
        console.log("Address to search:");
        console.log(lookupAddress);
        console.log("trafficModel.allStations");
        console.log(trafficModel.allStations.length);
        console.log(trafficModel.allStations);

        console.log("print addressObj");
        console.log(lookupAddress);

        //filter on my lookupAddress 
        const filterArray = (array, fields, value) => {
            fields = Array.isArray(fields) ? fields : [fields];

            return array.filter((item) => fields.some((field) => item[field] === value));
        };
        console.log("filter now");

        //   console.log(lookupAddress);
        //   console.log(lookupAddress.length);
        let lookupAd = lookupAddress.trim();
        //   console.log(lookupAd.length);
        //calling filterArray to get address information from array trafficModel.allStations
        let resultAddress = filterArray(trafficModel.allStations, 'AdvertisedLocationName', lookupAd);
        console.log(resultAddress);

        let result = resultAddress.map(({ AdvertisedLocationName }) => AdvertisedLocationName);
        console.log(result);
        console.log(JSON.stringify(resultAddress));
        console.log(Object.keys(resultAddress));
        console.log(Object.values(resultAddress));
        console.log(Object.entries(resultAddress));

        let ids = resultAddress.map((item) => item.AdvertisedLocationName);
        let names = resultAddress.map((item) => item.Geometry);
        let values = resultAddress.map((item) => item.LocationSignature);
        console.log(ids);
        console.log(names.map((item) => item.WGS84));
        console.log(values);

        let mySplit = JSON.stringify(resultAddress.map((item) => item.Geometry.WGS84));

        console.log("mySplit");
        console.log(typeof mySplit);
        console.log(mySplit);

        let myArray2 = mySplit.split(" ");
        console.log(myArray2[0]);
        console.log(myArray2[1]);
        console.log(myArray2[2]);
        let cordY = myArray2[1];
        cordY = cordY.replace(/[\|&;\$%@"<>\(\)\+,]/g, "");
        let cordX = myArray2[2];
        cordX = cordX.replace(/[\|&;\$%@"<>\(\)\+,]/g, "");


        cordX = cordX.slice(0, -1);
        console.log("cordY " + cordY);
        console.log("cordX " + cordX);

        trafficModel.currentCordX = cordX;
        trafficModel.currentCordY = cordY;



        //trafficModel.addressObj är koordinater för adress, ev behöver jag inte denna
        trafficModel.addressObj = names.map((item) => item.WGS84);
        trafficModel.currentSearchAddress = resultAddress.map((item) => item.AdvertisedLocationName);


        // trafficModel.allStations.forEach(function (item, index) {
        //     // console.log(item.Geometry, index);
        //     // console.log(item);
        //     // console.log("station");
        //     // console.log("check " + item.AdvertisedLocationName + " vs " + lookupAddress);
        //     if (item.AdvertisedLocationName.trim() == lookupAddress) {
        //         console.log("yes, address found: " +lookupAddress);
        //         console.log(item.Geometry);
        //     } else {
        //         // console.log("nope " + item.AdvertisedLocationName + " versus " + lookupAddress);
        //     }
        //   });
        console.log("hoppp");
        // const largeGroup = trafficModel.allStations.filter(activity => (activity.LocationName = station)); 
        //  console.log(largeGroup);

        return m.request({
            method: "GET",
            // url: `${baseURL}/orders/${id}?api_key=${apiKey}`
            // url: `${orders.url}/${orderId}?api_key=${apiKey}`,
            url: `${trafficModel.url}stations`
        }).then(function (result) {
            trafficModel.currentAddress = result.data;
            // trafficModel.currentAddress = `${result.data.address}, ${result.data.city}, ${result.data.country}`;
            console.log("current address;");
            console.log(trafficModel.currentAddress);
        });
    },

    getEstimatedDelays: function (name) {
        console.log("here the delay time is calculated");
        console.log("the station name to look for");
        console.log(name.length);
        let name2 = name.trim();
        console.log(name2.length);
        console.log(trafficModel.longAndShortNameObj);
        // console.log(trafficModel.longAndShortNameObj.find(key => trafficModel.longAndShortNameObj[key] === "Arvika"));
        // array1.find(element => element > 10)


        // console.log(result);
        // console.log(trafficModel.allDelays); 

        console.log(Object.keys(trafficModel.longAndShortNameObj));

        console.log(Object.values(trafficModel.longAndShortNameObj["Alingsås"]));
        console.log(`${name2}`);
        console.log(Object.values(trafficModel.longAndShortNameObj[`${name2}`]));

        let myString = Object.values(trafficModel.longAndShortNameObj[`${name2}`]);
        console.log("mystring");
        console.log(myString);
        let arr = [];
        //gör om array till en string, plockar bort komma tecken
        for (let p in myString)
            arr.push(myString[p]);
        const shortName = arr.join('');
        console.log("shortName");
        console.log(shortName);
        //search for data in delayed array with key shortName
        console.log("delays");
        console.log(trafficModel.allDelays);

        let delayObj = trafficModel.allDelays.find(function (post, index) {
            if (post.LocationSignature == `${shortName}`)
                console.log(post);
            return true;
        });
        console.log("hittat");
        console.log(delayObj);
        console.log(delayObj["EstimatedTimeAtLocation"]);
        // console.log(Object.values(delayObj["EstimatedTimeAtLocation"]));
        // console.log(Object.values(delayObj["AdvertisedTimeAtLocation"]));
        this.estimatedTimeAtLocation = delayObj["EstimatedTimeAtLocation"];
        this.advertisedTimeAtLocation = delayObj["AdvertisedTimeAtLocation"];
        console.log(this.advertisedTimeAtLocation);
        console.log(this.estimatedTimeAtLocation);
        //2022-01-07T21:42:00.000+01:00

        let startTime = this.advertisedTimeAtLocation.substr(0, 19);
        console.log("startTime: " + startTime);
        let _advTime = new Date(startTime);

        let stopTime = this.estimatedTimeAtLocation.substr(0, 19);
        console.log("stopTime: " + startTime);
        let _estTime = new Date(stopTime);

        let _diffTime = (_estTime.getTime() - _advTime.getTime());

        console.log("diffTime is: " + _diffTime);

        let _daysDiff = _diffTime / (1000 * 3600 * 24);

        console.log("diff days: " + _daysDiff);

        let _diffHours = (_diffTime / (1000 * 60 * 60)).toFixed(1);
        console.log("diffHours: " + _diffHours);
        console.log("valueOF");
        console.log(_diffHours.valueOf());

        if (_diffHours < 1) {
            _diffHours = 0;
            console.log("less than an hour: " + _diffHours);
        } else {
            console.log("more");
            console.log(_diffHours);
        }

        // let _diffMinutes = (_diffTime / (1000 * 60)).toFixed(1);

        this.delayedMinutes = (_diffTime / (1000 * 60)).toFixed(0);
        console.log("delayedMinutes: " + this.delayedMinutes);




        // console.log(startTime.getM);
        // const birthday = new Date(startTime);
        // console.log(birthday.getHours());



        // let shortAdvTime = this.advertisedTimeAtLocation.substr(11,8);
        // let shortEstTime = this.estimatedTimeAtLocation.substr(11,8);
        // let hourAdvTime = this.advertisedTimeAtLocation.substr(11,2);
        // let hourEstTime = this.estimatedTimeAtLocation.substr(11,2);
        // let minAdvTime = this.advertisedTimeAtLocation.substr(14,2);
        // let minEstTime = this.estimatedTimeAtLocation.substr(14,2);

        // console.log("shortAdvTime: " + shortAdvTime);
        // console.log("shortEstTime: " + shortEstTime);



        // let time1 = shortAdvTime.getTime();
        // let time2 = shortEstTime.getTime();
        // console.log("time1:");
        // console.log(time1);
        // console.log("time2:");
        // console.log(time2);

        // let diffTime = (time2 - time1);
        // console.log("diffTime");
        // console.log(diffTime);

        // console.log(shortAdvTime);
        // console.log(shortEstTime);
        // console.log(hourAdvTime);
        // console.log(hourEstTime);
        // console.log(minAdvTime);
        // console.log(minEstTime);
        // let diffHour = hourEstTime - hourAdvTime;
        // console.log("delayed hours");
        // console.log(diffHour);
        // let diffMin = minEstTime - minEstTime;
        // console.log("delayed minutes");
        // console.log(diffMin);

        // let timeHrAdv =  hourAdvTime * 3600 * 1000;
        // let timeMinAdv = minAdvTime * 60 * 1000;
        // console.log("Adv hour milli sec:" + timeHrAdv);
        // console.log("Adv minutes milli sec: " + timeMinAdv);

        // let timeHrEst = hourEstTime * 3600 * 1000;
        // let timeMinEst = minEstTime * 60 * 1000;

        // console.log("Estimate hour milli sec:" + timeHrEst);
        // console.log("Estimate minutes milli sec: " + timeMinEst);



        // let diffMilliSec = 
        //     var startTime = "09:00:00";
        // var endTime = "10:30:00";


        // let myRes = trafficModel.allDelays[0].filter(function(item) {
        //         return item.LocationName == `${name2}`;
        //     });

        //     console.log("myRes");
        //     console.log(myRes);


    },



    getUnique: function (orderId) {
        //ej implementerad
        return m.request({
            method: "GET",
            // url: `${baseURL}/orders/${id}?api_key=${apiKey}`
            url: `${orders.url}/${orderId}?api_key=${apiKey}`,
        }).then(function (result) {
            orders.currentOrder = result.data;
            orders.currentAddress = `${result.data.address}, ${result.data.city}, ${result.data.country}`;
            console.log("current orders;");
            // console.log(orders.currentOrder);
            console.log("current address;");
            console.log(orders.currentAddress);
        });
    },

    setStationName: function (shortName) {
        // console.log(shortName + "in setStationName print all objects");
        // console.log(trafficModel.allLocSignObj);
        let obj = trafficModel.allLocSignObj;
        let myHit = [];



        //ta bort
        // console.log("shortName is: " + shortName);

        for (var key in obj) {
            var value = obj[key];
            if (obj.hasOwnProperty(key)) {
                if (key == shortName) {
                    // console.log("hit in setStationName");
                    // console.log(key + " -> " + obj[key]);
                    // console.log(obj[key]);
                    // console.log(obj[key].AdvertisedLocationName);
                    // console.log(obj[key].Geometry);


                    //exempel som jag kan använda
                    // var key = "happyCount";
                    // var obj2 = {};
                    // obj2[key] = someValueArray;
                    // myArray.push(obj2);
                    //
                    let stationData = {};
                    stationData.name = key;
                    stationData.data = obj[key];
                    trafficModel.allDelayedLocSignStation.push(stationData);

                    // console.log("whats in trafficModel.allDelayedLocSignStation?");
                    // console.log(stationData);

                }
                // if (key == "AdvertisedLocationName") {
                //     console.log("yes hitting");
                //     console.log(value[0]);
                // }
            }
        }




        //return "bohoho";

    },
    //not used yet
    createDelayDetailsObj: async function (xxx) {
        console.log("create details");
    },


    //hämta specifik order
    getOrder: function (orderId) {
        return m.request({
            method: "GET",
            // url: `${baseURL}/orders/${id}?api_key=${apiKey}`
            url: `${orders.url}/${orderId}?api_key=${apiKey}`,
        }).then(function (result) {
            orders.currentOrder = result.data;
            orders.currentAddress = `${result.data.address}, ${result.data.city}, ${result.data.country}`;
            console.log("current orders;");
            console.log(orders.currentOrder);
            console.log("current address;");
            console.log(orders.currentAddress);
        });
    },

    //hämta specifik station baserad på delays
    // getStation: function (location) {
    //     return m.request({
    //         method: "GET",
    //         // url: `${baseURL}/orders/${id}?api_key=${apiKey}`
    //         url: `${orders.url}/${orderId}?api_key=${apiKey}`,
    //     }).then(function (result) {
    //         orders.currentOrder = result.data;
    //         orders.currentAddress = `${result.data.address}, ${result.data.city}, ${result.data.country}`;
    //         console.log("current orders;");
    //         console.log(orders.currentOrder);
    //         console.log("current address;");
    //         console.log(orders.currentAddress);
    //     });
    // },


    getStations: function () {
        console.log("in TrafficModel.getStations");
        let stationKey = "";
        // console.log("empty allStations");
        // trafficModel.allStations.length = 0;
        return m.request({
            method: "GET",
            url: `${trafficModel.url}stations`
        }).then(function (result) {
            trafficModel.allStations = result.data;
            console.log("1. alla stationer hämtade");
            //orders.ordersReadyToSend = result.data.filter(function(order) {
            let i = 0;
            result.data.forEach(function (station) {
                // console.log("2. loopa igenom alla stationer, här skapas allLocSignObj");
                // let allLocSignObj = {};
                // console.log("the resultset:");
                // console.log(result.data);
                console.log("sätter stationKey till blankt");
                let stationKey = "";
                // i ++;


                //start
                // for (var i = 0; i < result.data.length; i++) {
                //     document.write("<br><br>array index: " + i);
                //     var obj = result.data[i];
                //     for (var key in obj){
                //       var value = obj[key];
                //       document.write("<br> - " + key + ": " + value);
                //          (obj.hasOwnProperty("FromLocation")); //false
                //       if (key == "LocationSignature") {
                //           console.log("hit");
                //         //   console.log(value[0].LocationName);
                //           console.log(value);

                //         trafficModel.allDelayedLocSign.push(value[0].LocationName);

                //       }

                //     }

                //     console.log(delay.FromLocation[0]);
                //     console.log("ToLocation");
                //     console.log(delay.ToLocation[0]);  
                // });
                //   }
                //stop
                console.log("AdvertisedLocationName in getStations: " + station.AdvertisedLocationName);
                //
                trafficModel.longAndShortNameObj[station.AdvertisedLocationName] = station.LocationSignature;

                //
                // trafficModel.locSignAndStation.push(station.AdvertisedLocationName, station.LocationSignature);
                // console.log(station.AdvertisedLocationName);
                // console.log("LocationSignature: " + station.LocationSignature);
                console.log("sätt nyckeln stationKey som ska användas till mitt objekt");
                //nyckel till resp objekt
                stationKey = station.LocationSignature;

                //nyckel blir locationSignature och till denna kopplas hela objektet station
                // console.log("sätter ihop stationKey och hela objektet station");
                // console.log("stationKey: " + stationKey + " station: ");
                // console.log(station);
                // trafficModel.allLocSignObj = station;
                trafficModel.allLocSignObj[stationKey] = station;
                // console.log("allLocSignObj to push: and i is  " + i);
                // console.log(trafficModel.allLocSignObj);
                // console.log(Object.values(trafficModel.allLocSignObj));

                // console.log("push till mitt objekt allLocSignObj");
                // trafficModel.allDelayedLocSign[stationKey].push(trafficModel.allLocSignObj);
                //nedan tar jag bort trafficModel.allLocSign.push(stationKey);
                // trafficModel.allLocSign.push(stationKey);

                //lägg in alla stationer i separat array
                console.log("lägg in alla stationer, långa namnet i en egen array trafficModel.onlyStations");
                trafficModel.onlyStations.push(station.AdvertisedLocationName);
                // console.log(station.LocationSignature);
                // console.log(" WGS84: " + station.Geometry.WGS84);
                // console.log(station.Geometry);
                // console.log(station.Geometry.WGS84);


            });
            // console.log("stationKeys only the keys: " + trafficModel.allLocSign.length);
            //     console.log(trafficModel.allLocSign);

            //     const distinct = (value, index, self) => {
            //         return self.indexOf(value) === index;
            //         }
            //     const distinctLocSign = trafficModel.allLocSign.filter(distinct);
            //     console.log("the distinct: " + distinctLocSign.length);
            //     console.log(distinctLocSign);
            //     var unique = trafficModel.allLocSign.filter((v, i, a) => a.indexOf(v) === i); 
            //     console.log("unique: ");
            //     console.log(unique);
            //     console.log(unique.length);


            // trafficModel.allStations = result;
            // orders.currentOrders = result.data.filter(function(order) {
            //     return order.status_id >= 200;
            // });

            //console.log(orders.ordersReadyToSend);
            // console.log("allStations;");
            // console.log(trafficModel.allStations);

            // console.log("allDelayedLocSign: ");
            // console.log(trafficModel.allDelayedLocSign);
            // console.log(trafficModel.allStations.data);
            // console.log(trafficModel.allStations.data[0]);
        });
    },
    //inparm värde och array att söka i
    // itemExists: function (item, container) {
    //     // traverse the container
    //     for (let i = 0; i < container.length; i++) {
    //         if (container[i] == item) {
    //             console.log(true);

    //         }
    //     }
    // },

    // getDelayedStations: function(locSign) {
    //     console.log("getDelayedStations model");
    //     console.log("LocationSignature" + locSign);
    //     return m.request({
    //         method: "GET",
    //         url: `${trafficModel.url}`
    //     }).then(function(result) {
    //         trafficModel.allStations = result.data;
    //         //orders.ordersReadyToSend = result.data.filter(function(order) {

    //             result.data.forEach(function (station) {
    //                 console.log("AdvertisedLocationName");
    //                 console.log(station.AdvertisedLocationName);
    //                 console.log(station.LocationSignature);

    //             });



    //         console.log("getStations model");
    //         console.log(trafficModel.allLocSignObj);
    //         // trafficModel.allStations = result;
    //         // orders.currentOrders = result.data.filter(function(order) {
    //         //     return order.status_id >= 200;
    //         // });

    //         //console.log(orders.ordersReadyToSend);
    //         console.log("allStations;");
    //         console.log(trafficModel.allStations);
    //         console.log(trafficModel.allStations.data);
    //         console.log(trafficModel.allStations.data[0]);
    //     });
    // },

    getDelayDetails: async function () {

        console.log("getDelayDetails model");
        // console.log(trafficModel.delayDetObj);
        
       

        for (let prop in trafficModel.delayDetObj) {
            console.log("in prop");
            console.log(prop);
            console.log("trafficModel.delayDetObj[prop]");
            console.log(trafficModel.delayDetObj[prop]);
            console.log(trafficModel.delayDetObj[prop].FromLocation[0]);
            
            console.log(trafficModel.delayDetObj[prop].AdvertisedTimeAtLocation);
            console.log(trafficModel.delayDetObj[prop].EstimatedTimeAtLocation);
        }

       
        //object to save details on each delay
        
        
        // let obj = trafficModel.allDelays;

        // console.log("check length");
        // console.log(obj.length);
        // for (var key in obj) {
        //     let delayDetailsObj = {
        //         key1: "",
        //         key2: "",
        //         key3: "",
        //         key4: ""
        //     };
        //     var value = obj[key];
        //     //   document.write("<br> - " + key + ": " + value + " in delay");
        //     //   console.log(obj.hasOwnProperty("FromLocation")); //false
        //     if (key == "FromLocation") {
        //         delayDetailsObj.key1 = value[0].LocationName;
        //         console.log("delayDetailsObj.key1 = value[0].LocationName");
        //         console.log(delayDetailsObj.key1 = value[0].LocationName);

        //     }
        //     if (key == "ToLocation") {
        //         delayDetailsObj.key2 = value[0].LocationName;
        //     }

        //     if (key == "AdvertisedTimeAtLocation") {
        //         console.log("yes time");
        //         console.log(value);
        //         delayDetailsObj.key3 = value;
        //     }
        //     if (key == "EstimatedTimeAtLocation") {
        //         console.log("yes time");
        //         delayDetailsObj.key4 = value;
        //     }
        //     //add object to delayDetails array
        //     trafficModel.delayDetails.push(delayDetailsObj);

        // }
        

        console.log("nå vad finns i array");
        console.log(trafficModel.delayDetails);
        
    },


    getDelays: async function () {
        

        console.log("getDelays model");

        const result = await m.request({
            method: "GET",
            url: `${baseURLProj}delayed`,
        });
        trafficModel.allDelays = result.data;
        // trafficModel.delayDetObj = result.data //testar 20220408
        
        
        //iterate each row i for each row in result.data
        for (var i = 0; i < result.data.length; i++) {
            // document.write("<br><br>array index, number of delays? : " + i);
            var obj = result.data[i];

            const delayDetailsObj2 = {
                from: "",
                to: "",
                advertisedTime: "",
                estimatedTime: ""
            };

           

            // console.log("whats in obj: ");
            // console.log(obj);

            
            // console.log("trafficModel.delayDetails");
            

            for (var key in obj) {
                var value = obj[key];
                //   document.write("<br> - " + key + ": " + value + " in delay");
                //   console.log(obj.hasOwnProperty("FromLocation")); //false
                // console.log("key and value in  delay");
                // console.log(value);
                if (key == "FromLocation") {
                    //   console.log("hit hit: " + value[0].LocationName);
                    //   console.log(value[0].LocationName);
                    // console.log("more values");
                    //   console.log(value);
                    trafficModel.allDelayedLocSign.push(value[0].LocationName);

                    // this.createDelayDetailsObj("hoho");
                    // delayDetailsObj.key1 = value[0].LocationName;
                    delayDetailsObj2.from = value[0].LocationName;

                }
                if (key == "ToLocation") {
                    //   console.log("hit hit: " + value[0].LocationName);
                    //   console.log(value[0].LocationName);
                    // console.log("more values");
                    //   console.log(value);
                    //note I push the values here subce ut is the last key I'm interested in in current loop
                    trafficModel.allDelayedLocSign.push(value[0].LocationName);
                    delayDetailsObj2.to = value[0].LocationName;

                    // delayDetailsObj.key2 = value[0].LocationName;

                }

                if (key == "AdvertisedTimeAtLocation") {
                    // console.log("yes time");
                    // console.log(value);
                    // delayDetailsObj.key3 = value;
                    delayDetailsObj2.advertisedTime = value;

                }
                if (key == "EstimatedTimeAtLocation") {
                    // console.log("yes time");
                    // console.log(value);
                    // delayDetailsObj.key3 = value;
                    delayDetailsObj2.estimatedTime = value;

                }
                

                

                

                
                // if (key == "EstimatedTimeAtLocation") {
                //     console.log("yes time");
                //     delayDetailsObj.key4 = value;
                // }
                //add object to delayDetails array

            }
            // trafficModel.delayDetails.push(delayDetailsObj);
            if (delayDetailsObj2.from != "") {
                // console.log("push this to obj");
                // console.log(delayDetailsObj2);
                trafficModel.delayDetails.push(delayDetailsObj2);

            } else {
                // console.log("sorry no hit key1 is blank");
                // console.log(delayDetailsObj2)
            }
            
            // console.log("nå vad finns i array");
            // console.log(trafficModel.delayDetails);
            // console.log(trafficModel.delayDetails.length);
        }
        // console.log("now it trafficModel.delayDetails is populated");
        // console.log(trafficModel.delayDetails.length);
        // console.log("trafficModel.delayDetails");
        // console.log(trafficModel.delayDetails);
        // console.log("trafficModel.allDelays");
        // console.log(trafficModel.allDelays);
        // trafficModel.getDelayDetails();
        
        trafficModel.allUniqueDelayedLocSign = trafficModel.allDelayedLocSign.filter((v, i_1, a) => a.indexOf(v) === i_1);
        console.log("jaja allUniqueDelayedLocSign: " + trafficModel.allUniqueDelayedLocSign);
        console.log("för varje unik locSign anropas setStationName där jag fyller på array med stationName");
        // uniqueLocSign.forEach(element => delays.getStationName(element));
        let myResult = [];
        console.log("trafficModel.allUniqueDelayedLocSign.length");
        console.log(trafficModel.allUniqueDelayedLocSign.length);
        for (let index = 0; index < trafficModel.allUniqueDelayedLocSign.length; ++index) {
            const element = trafficModel.allUniqueDelayedLocSign[index];
            // console.log(element);
            // console.log("print object");
            trafficModel.setStationName(element);
            ;
            // myResult.push(delays.getStationName(element));
            // console.log(myResult);
        }




    },



    //all unique delays

    // getUniqueDelays: function() {
    //     console.log("getUniqueDelays modelllll");
    //     console.log(trafficModel.allDelayedLocSign.length);
    //     // console.log(trafficModel.allDelayedLocSign.filter(distinct));
    //     console.log("något unikt? hallå");
    //     // 
    //         //   console.log("distinct locationSign from allDelayedLocSign in getUniqueDelays");
    //           console.log(trafficModel.allDelayedLocSign);
    //         //   const distinctLocSign = trafficModel.allDelayedLocSign.filter(distinct);
    //           trafficModel.distinctLocSign = trafficModel.allDelayedLocSign.filter(distinct);
    //           console.log(trafficModel.distinctLocSign);
    //           console.log("något unikt?");
    // },


    //

    org_getDelays: function () {
        console.log("getDelays model");
        //hämta alla delays, resultat sparas i allDelaydLocSign
        const distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        }

        return m.request({
            method: "GET",
            url: `${baseURLProj}delayed`,
        }).then(function (result) {
            trafficModel.allDelays = result.data;


            //nedan skriver ut value för alla nycklar i objektet, men array i obj skrivs ut som en klump
            // for(var key in result.data) {
            //     for (var key1 in result.data[key]) {
            //         console.log(result.data[key][key1])
            //     }
            //  }

            // var objects = [];¨
            console.log("nollställer array allDelayedLocSign");
            trafficModel.allDelayedLocSign.length = 0;
            for (var i = 0; i < result.data.length; i++) {
                document.write("<br><br>array index, number of delays? : " + i);
                var obj = result.data[i];


                for (var key in obj) {
                    var value = obj[key];
                    document.write("<br> - " + key + ": " + value + " in delay");
                    console.log(obj.hasOwnProperty("FromLocation")); //false
                    if (key == "FromLocation") {
                        console.log("hit hit: " + value[0].LocationName);
                        console.log("more values");
                        console.log(value);
                        console.log("hit: " + value[1].LocationName);
                        //   console.log(value[0].LocationName);

                        trafficModel.allDelayedLocSign.push(value[0].LocationName);

                    }

                }


                //     console.log(delay.FromLocation[0]);
                //     console.log("ToLocation");
                //     console.log(delay.ToLocation[0]);  
                // });
            }

            const distinctLocSign = trafficModel.allDelayedLocSign.filter(distinct);
            console.log("distinct locationSign from allDelayedLocSign in distinctLocSign");
            console.log(distinctLocSign);

            console.log("hoppla, vad finns i allDelayedLocSign?");

            console.log(trafficModel.allDelayedLocSign);
            console.log("hur många poster allDelayedLocSign?");
            console.log(trafficModel.allDelayedLocSign.length);

            //orders.ordersReadyToSend = result.data.filter(function(order) {
            // console.log("trafficModel.allDelays");
            // console.log(trafficModel.allDelays[0]);

            // Object.entries(repo).forEach(([key, value]) => {
            //     console.log(`${key}: ${value}`);


            //funkar
            // result.data.forEach(function (delay) {
            //     console.log("FromLocation");
            //     console.log(delay.FromLocation[0]);
            //     console.log("ToLocation");
            //     console.log(delay.ToLocation[0]);  
            // });

        });




    },


    getReadyToSendOrders: function () {
        return m.request({
            method: "GET",
            url: `${orders.url}?api_key=${apiKey}`
        }).then(function (result) {
            //orders.ordersReadyToSend = result.data.filter(function(order) {
            console.log("getReadyToSendOrders model");
            orders.currentOrders = result.data.filter(function (order) {
                return order.status_id >= 200;
            });

            //console.log(orders.ordersReadyToSend);
            console.log("currentOrders;");
            console.log(orders.currentOrders);
        });
    },


    currentOrder: {},
    currentAddress: {},
    save: function () {
        console.log(orders.currentOrders);
    },
    getTotalPrice: function (order) {
        var totalPrice = 0;

        order.order_items.forEach(function (product) {
            totalPrice += (product.amount * product.price);
        });
        return totalPrice;
    },


    sendInvoice: function () {
        var order = orders.curr;

        console.log("the token is in sendInvoice");
        console.log(authorization.token);

        order.api_key = authorization.payload.api_key;
        order.status_id = "600";
        return m.request({
            method: 'PUT',
            url: `${authorization.baseURL}/orders`,
            data: order
        }).then(function () {
            order.total_price = orders.getTotalPrice(order);
            order.creation_date = orders.getDate();
            order.due_date = orders.getDate(30);
            order.order_id = order.id;
            return m.request({
                method: 'POST',
                url: `${authorization.baseURL}/invoices`,
                data: order,
                headers: {
                    'x-access-token': authorization.token
                }
            });
        }).then(function () {
            m.route.set("/invoices");
        });
    },

    getDate: function (days = 0) {
        var d = new Date();

        d.setDate(d.getDate() + days);
        return d.getFullYear() + "-" +
            (d.getMonth() + 1 > 9 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)) + "-" +
            (d.getDate() > 9 ? d.getDate() : "0" + d.getDate());
    }

};

export default trafficModel;
