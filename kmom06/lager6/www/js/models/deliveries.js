import m from "mithril";

var deliveries = {
    baseURL: "https://lager.emilfolino.se/v2/deliveries",
    apiKey: "8e4ce3ab696d336c288e8d094260e759",
    currentDeliveries: [],
    getDeliveries: function() {
        console.log("in getDeliveries");
        return m.request({
            url: deliveries.baseURL + "?api_key=" + deliveries.apiKey,
            method: "GET"
        }).then(function(result) {
            if (result.data.length === 0) {
                deliveries.currentDeliveries = [{
                    product_name: "det finns inga leveranser"
                }];
            } else {
                //lägg in alla leveranser i en array
                deliveries.currentDeliveries = result.data;

                console.log(deliveries.currentDeliveries);
            }
        });
    },
    currentDelivery: {
        api_key: "8e4ce3ab696d336c288e8d094260e759",
        comment: "ingen kommentar"
    },
    save: function() {
        return m.request({
            url: deliveries.baseURL + "?api_key=" + deliveries.apiKey,
            data: deliveries.currentDelivery,
            method: "POST"
        }).then(function(result) {
            console.log("save - " + JSON.stringify(result.data));
        });
    }
};

export default deliveries;
