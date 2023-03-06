// https://leetcode.com/problems/longest-repeating-character-replacement/
// tags - string
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // Sliding window - Window size - count of most repeated char <= k
  // We can flip the other characters into the most repeated char.
  let maxLen = 0;
  for (let map = new Map(), left = 0, right = 0; right < s.length; right++) {
    // Add s[right] into the window.
    const rcount = map.get(s[right]) || 0;
    map.set(s[right], rcount + 1);

    while (left <= right) {
      const windowSize = right - left + 1;
      const maxCount = Math.max(...map.values());
      if (windowSize - maxCount <= k) break;
      const lcount = map.get(s[left]);
      map.set(s[left], lcount - 1);
      left++;
    }

    // Invariant should be fixed here.
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;

  // let maxLen = 0;
  // let start = 0,
  //   end = 0;
  // // Keep track of char counts in the window.
  // // Invariant - #ops required <= k i.e. window size - max count <= k
  // const map = new Map();
  // let maxCount = 0,
  //   maxCountChar = "";
  // while (start < s.length && end < s.length) {
  //   // Attempt to add s[end] into the window.
  //   const charEndCount = map.get(s[end]) || 0;
  //   // Size of the window if s[end] is added
  //   const windowAddSize = end - start + 1;
  //   if (charEndCount + 1 < maxCount && windowAddSize - maxCount <= k) {
  //     map.set(s[end], charEndCount + 1);
  //     maxLen = Math.max(maxLen, windowAddSize);
  //     end++;
  //   } else if (
  //     charEndCount + 1 >= maxCount &&
  //     windowAddSize - charEndCount - 1 <= k
  //   ) {
  //     map.set(s[end], charEndCount + 1);
  //     maxCountChar = s[end];
  //     maxCount = charEndCount + 1;
  //     maxLen = Math.max(maxLen, windowAddSize);
  //     end++;
  //   } else {
  //     // Adding s[end] violates the invariant.
  //     const charStartCount = map.get(s[start]);
  //     map.set(s[start], charStartCount - 1);
  //     if (s[start] === maxCountChar) {
  //       // Recompute the maxCount. Linear scan okay since map can contain at most 26 entries.
  //       maxCount = charStartCount - 1;
  //       for (const [char, count] of map.entries()) {
  //         if (count > maxCount) {
  //           maxCount = count;
  //           maxCountChar = char;
  //         }
  //       }
  //     }
  //     start++;
  //   }
  // }
  // return maxLen;

  // function _printMap(map) {
  //     const temp = Array.from(map.entries())
  //         .filter(e => e[1] !== 0)
  //         .map(e => e[0] + ': ' + e[1])
  //         .join(', ');
  //     console.log('{ ' + temp + ' }');
  // }
  // // scan s with a moving window of size len
  // // check if all chars in this substring can be flipped to the same char in k moves
  // function _canBuildSubstring(len) {
  //     // console.log('Checking ' + len);
  //     const map = new Map();
  //     for (let i = 0, code = 'A'.charCodeAt(0); i < 26; i++, code++) {
  //         map.set(String.fromCharCode(code), 0);
  //     }
  //     // _printMap(map);
  //     // count the chars in the first window
  //     // for subsequent windows, we'll just update the counts
  //     for (let i = 0; i < len; i++) {
  //         let count = map.get(s[i]) + 1;
  //         // console.log(s[i] + ': ' + count);
  //         if (count + k >= len) {
  //             return true;
  //         }
  //         map.set(s[i], count);
  //     }
  //     // slide the window one char to the right with every pass
  //     for (let start = 1, end = start + len; end <= s.length ; start++, end++) {
  //         // _printMap(map);
  //         const charDropped = s[start - 1], newCharDroppedCount = map.get(charDropped) - 1;
  //         map.set(charDropped, newCharDroppedCount);
  //         const charAdded = s[end - 1], newCharAddedCount = map.get(charAdded) + 1;
  //         map.set(charAdded, newCharAddedCount);
  //         if (newCharAddedCount + k >= len) {
  //             return true;
  //         }
  //     }
  //     return false;
  // }
  // // binary search space from k to N
  // let low = k, high = s.length;
  // // here we're guaranteed that the search will yield an answer
  // // okay to initialize to a non-empty value
  // let result = Math.min(low, high);
  // while (low <= high) {
  //     const mid = Math.floor((low + high)/2);
  //     if (_canBuildSubstring(mid)) {
  //         // console.log(mid + ' true');
  //         result = mid;
  //         low = mid + 1; // search right half
  //     } else {
  //         // console.log(mid + ' false');
  //         high = mid - 1; // search left half
  //     }
  // }
  // return result;
};
