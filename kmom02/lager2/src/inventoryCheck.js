"use.strict";
/* exported inventoryCheck */

var inventoryCheck = function(currentOrder) {
    console.log("in inventoryCheck");
    var count = currentOrder.order_items.length;
    var result = currentOrder.order_items.filter(item => item.amount <= item.stock);

    console.log(count, result.length);
    return count == result.length;
};


export default inventoryCheck;
