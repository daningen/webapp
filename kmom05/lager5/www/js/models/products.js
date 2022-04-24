"use strict";

import m from 'mithril';

const products = {
    baseURL: "https://lager.emilfolino.se/v2/products",
    apiKey: "8e4ce3ab696d336c288e8d094260e759",
    currentProducts: [],

    getProducts: function() {
        return m.request({
            method: "GET",
            url: `${products.baseURL}?api_key=${products.apiKey}`
        })
            .then(function(result) {
                products.currentProducts = result.data;
            });
    },
    //används för den produkt som ska uppdateras
    getProduct: function (productId) {
        console.log("in getProduct");
        return products.currentProducts.filter(function (product) {
            return product.id == productId;
        })[0];
    },

    //uppdaterar amount för en produkt
    updateProduct: function (update) {
        console.log("updating amount, here is the product_id:");
        console.log(update.product_id);
        let product = products.getProduct(update.product_id);

        console.log("and the product to update is:");
        console.log(product);

        product.api_key = `${products.apiKey}`;
        product.stock += parseInt(update.amount);
        return m.request({
            method: 'PUT',
            url: `${products.baseURL}`,
            data: product
        });
    }
};

export default products;
