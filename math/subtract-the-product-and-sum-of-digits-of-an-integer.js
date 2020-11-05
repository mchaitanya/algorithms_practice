// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// tags - number
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    let temp = n;
    while (temp > 0) {
        const digit = temp%10;
        sum += digit;
        product *= digit;
        temp = Math.floor(temp/10);
    }
    
    return product - sum;
    
};