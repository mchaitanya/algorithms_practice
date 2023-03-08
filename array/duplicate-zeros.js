// https://leetcode.com/problems/duplicate-zeros/
// tags - array
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let totalZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) totalZeros++;
  }

  let zerosSeen = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) zerosSeen++;
    const zerosLeft = totalZeros - zerosSeen;
    const newIndex = i + zerosLeft;
    if (newIndex < arr.length) {
      arr[newIndex] = arr[i];
    }
    if (newIndex + 1 < arr.length && arr[i] === 0) {
      arr[newIndex + 1] = 0;
    }
  }

  // const temp = new Array(arr.length);
  // for (let i = 0, j = 0; j < temp.length; i++) {
  //     if (arr[i] !== 0) {
  //         temp[j] = arr[i];
  //         j++;
  //     } else {
  //         temp[j] = temp[j+1] = 0;
  //         j += 2;
  //     }
  // }

  // // Copy temp into arr.
  // for (let i = 0; i < arr.length; i++) {
  //     arr[i] = temp[i];
  // }
};
