// https://leetcode.com/problems/remove-k-digits/
// tags - string
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    // do it one step at a time
    // scan from left till digits go up, remove that digit - then trim 0s from left
    // make recursive subcall
    if (num.length <= k) {
        return '0';
    } else if (k === 0) {
        return num;
    }
    
    let i = 0;
    while (i < num.length-1 && num[i] <= num[i+1]) {
        i++;
    }
    // drop the ith char
    let result = num.slice(0,i) + num.slice(i+1);
    
    // trim any leading 0s
    let j = 0;
    while (result[j] === '0') {
        j++;
    }
    result = (j > 0 ? result.slice(j) : result);
    
    return removeKdigits(result, k-1);
    
};