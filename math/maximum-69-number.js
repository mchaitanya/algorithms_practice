// https://leetcode.com/problems/maximum-69-number/
// tags - number
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
//     // scan from left - change first 6 to 9
//     const digits = String(num).split('');
//     for (let i = 0; i < digits.length; i++) {
//         if (digits[i] === '6') {
//             digits[i] = '9';
//             break;
//         }
//     }
//     return Number(digits.join(''));
    
    const digits = [];
    let temp = num;
    while (temp > 0) {
        digits.push(temp % 10);
        temp = Math.floor(temp / 10);
    }
    // 966 => [6, 6, 9]
    let result = 0;
    let seenSix = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let d = digits[i];
        if (!seenSix && d === 6) {
            seenSix = true;
            d = 9;
        }
        result = (result*10) + d;
    }
    return result;
    
//     let temp = num;
//     let i = 0, leftmostSix = undefined;
//     while (temp > 0) {
//         const d = temp % 10;
//         if (d === 6) {
//             leftmostSix = i;
//         }
//         temp = Math.floor(temp/10);
//         i++;
//     }
    
//     if (leftmostSix === undefined) {
//         return num;
//     } else {
//         return num + 3 * (10 ** leftmostSix);
//     }
    
};