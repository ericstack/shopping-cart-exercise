class ShoppingCart {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.items = [];
    this.freeItems = [];
    this.promoCode = null;
  }

  add(item, promoCode = null) {
    this.items.push(item);
   
  }

  applyPromo(code) {
    this.promoCode = code;
  }

  total() {
    this.freeItems = [];
    return parseFloat(
      this.pricingRules(this, this.promoCode).toFixed(2)
    );
  }

  itemsList() {
    return [...this.items, ...this.freeItems];
  }
}

module.exports = ShoppingCart;