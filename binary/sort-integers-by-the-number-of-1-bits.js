// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
// tags - array
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  function count1s(num) {
    let count = 0;
    while (num > 0) {
      if (num & (1 === 1)) count++;
      num = num >>> 1;
    }
    return count;
  }

  return arr.sort((n1, n2) => {
    const count1 = count1s(n1);
    const count2 = count1s(n2);
    return count1 === count2 ? n1 - n2 : count1 - count2;
  });

  // function _countBitsSet(n) {
  //     let count = 0;
  //     // const binary = n.toString(2);
  //     // for (let bit of binary) {
  //     //     if (bit === '1') {
  //     //         count++;
  //     //     }
  //     // }
  //     while (n > 0) {
  //         if (n % 2 === 1) {
  //             count++;
  //         }
  //         n = Math.floor(n/2);
  //     }
  //     return count;
  // }
  // const map = new Map();
  // for (let n of arr) {
  //     if (!map.has(n)) {
  //         map.set(n, _countBitsSet(n));
  //     }
  // }
  // arr.sort((n1, n2) => {
  //     if (map.get(n1) === map.get(n2)) {
  //         return n1 - n2;
  //     } else {
  //         return map.get(n1) - map.get(n2);
  //     }
  // });
  // return arr;
};
