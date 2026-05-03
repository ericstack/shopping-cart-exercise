const PRODUCTS = require('../src/products');
const ShoppingCart = require('../src/ShoppingCart');
const pricingRules = require('../src/pricingRules');

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ${message}`);
    console.error(`Expected: ${expected}, Got: ${actual}`);
  } else {
    console.log(`✅ ${message}`);
  }
}

// Scenario 1
let cart = new ShoppingCart(pricingRules);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_large);

assertEqual(cart.total(), 94.70, 'Scenario 1 total');

// Scenario 2
cart = new ShoppingCart(pricingRules);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_large);
cart.add(PRODUCTS.ult_large);
cart.add(PRODUCTS.ult_large);
cart.add(PRODUCTS.ult_large);

assertEqual(cart.total(), 209.40, 'Scenario 2 total');

// Scenario 3
cart = new ShoppingCart(pricingRules);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS.ult_medium);
cart.add(PRODUCTS.ult_medium);

assertEqual(cart.total(), 84.70, 'Scenario 3 total');

// Scenario 4
cart = new ShoppingCart(pricingRules);
cart.add(PRODUCTS.ult_small);
cart.add(PRODUCTS['1gb']);
cart.applyPromo('I<3AMAYSIM');
console.log('Total:', cart.total());
assertEqual(cart.total(), 31.32, 'Scenario 4 total');