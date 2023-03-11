// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// tags - stack
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // Solve with a STACK!
  const stack = [];
  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");

  // // // Simulate the process one pair at a time.
  // // const arr = Array.from(s);
  // // for (let i = 0; i < arr.length-1; i++) {
  // //     if (arr[i] === arr[i+1]) {
  // //         arr[i] = arr[i+1] = '';
  // //         i++;
  // //     }
  // // }
  // // const result = arr.join('');
  // // if (result.length === s.length) {
  // //     return result;
  // // } else {
  // //     return removeDuplicates(result);
  // // }

  // // If there are 2 adjacent equal letters, run 2 pointers outward. Remove the palindromic substring.
  // const arr = Array.from(s);
  // for (let i = 0; i < arr.length-1; i++) {
  //     if (arr[i] === '') continue;
  //     if (arr[i] === arr[i+1]) {
  //         let left = i, right = i+1;
  //         while (left >= 0 && right < arr.length && arr[left] === arr[right]) {
  //             arr[left] = arr[right] = '';
  //             left--;
  //             right++;
  //         }
  //     }
  // }

  // const result = arr.join('');
  // if (result.length === s.length) {
  //     return result;
  // } else {
  //     return removeDuplicates(result);
  // }
};
