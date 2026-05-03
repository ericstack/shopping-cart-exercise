const PRODUCTS = require('./src/products');
const ShoppingCart = require('./src/ShoppingCart');
const pricingRules = require('./src/pricingRules');

const cart = new ShoppingCart(pricingRules);

cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_large);

console.log('Total:', cart.total());
console.log('Items:', cart.itemsList());