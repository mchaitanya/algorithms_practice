// https://leetcode.com/problems/apply-discount-every-n-orders/
// tags - design
/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
  this.n = n;
  this.index = 0;
  this.discounted = (100 - discount) / 100;
  this.price = new Map();
  for (let i = 0; i < products.length; i++) {
    this.price.set(products[i], prices[i]);
  }
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += amount[i] * this.price.get(product[i]);
  }

  this.index++;
  if (this.index % this.n === 0) {
    return this.discounted * total;
  } else {
    return total;
  }
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
