// https://leetcode.com/problems/calculate-amount-paid-in-taxes/
// tags - array
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let tax = 0;
  let lower = 0;
  for (const [upper, percent] of brackets) {
    if (income <= lower) break;
    const taxable = Math.min(income - lower, upper - lower);
    tax += (taxable * percent) / 100;
    lower = upper;
  }
  return tax;
};
