# Amaysim Shopping Cart Exercise

## 📌 Overview
This project implements a flexible shopping cart system that supports dynamic pricing rules and promotional offers.

The architecture is designed to allow easy modification and extension of pricing logic without changing the cart core.

---

## 🧠 Features

- Multiple product support
- Flexible pricing rules engine
- Promotional discounts:
  - 3-for-2 deal on Unlimited 1GB
  - Bulk discount on Unlimited 5GB
  - Free 1GB data pack with Unlimited 2GB
  - Promo code: `I<3AMAYSIM` (10% discount)

---

## 🏗️ Architecture

- `ShoppingCart` → handles cart operations
- `pricingRules` → encapsulates all pricing logic
- `products` → product catalog

This separation ensures high maintainability and extensibility.

---

## ▶️ How to Run

### Run app
```bash
node index.js

## ▶️ How to Run Test File
```bash
npm run test