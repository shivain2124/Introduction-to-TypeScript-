"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//long
function identityThree(val) {
    return val;
}
// identityThree(true);
//short
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProduct(products) {
    // dbs operations
    const index = 3;
    return products[index];
}
const getMoreSearchProducts = (products) => {
    // dbs operations
    const index = 4;
    return products[index];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
