const PRODUCTS = require('./products');

function pricingRules(cart, promoCode) {
  let total = 0;
  const counts = {};

  cart.items.forEach(item => {
    counts[item.code] = (counts[item.code] || 0) + 1;
  });

  // 3 for 2 (ult_small)
  if (counts['ult_small']) {
    const qty = counts['ult_small'];
    const payable = qty - Math.floor(qty / 3);
    total += payable * PRODUCTS['ult_small'].price;
  }

  // Bulk discount (ult_large)
  if (counts['ult_large']) {
    const qty = counts['ult_large'];
    const price = qty > 3 ? 39.90 : PRODUCTS['ult_large'].price;
    total += qty * price;
  }

  // Free 1GB for ult_medium
  if (counts['ult_medium']) {
    const qty = counts['ult_medium'];
    total += qty * PRODUCTS['ult_medium'].price;

    for (let i = 0; i < qty; i++) {
      cart.freeItems.push(PRODUCTS['1gb']);
    }
  }

  // Other items
  cart.items.forEach(item => {

    if (!['ult_small', 'ult_medium', 'ult_large'].includes(item.code)) {
      total += item.price;
    }
  });

  // Promo code
  if (promoCode === 'I<3AMAYSIM') {
    total *= 0.9;
  }
  
  return total;
}

module.exports = pricingRules;
