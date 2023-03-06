// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
// tags - string, binary-search
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  // // binary search the space 1 to s.length
  // // can check if a length t is valid by scanning s in O(n) with a window of size t
  // if (s === '' || k === 0) {
  //     return 0;
  // }

  // function _doesSubstringExist(len) {
  //     // must contain at most K distinct characters
  //     // maintain a map of char counts - can check map size for number of distinct chars
  //     const map = new Map();
  //     for (let i = 0; i < len; i++) {
  //         let count = map.get(s[i]) || 0;
  //         map.set(s[i], count+1);
  //     }

  //     if (map.size <= k) {
  //         return true;
  //     }

  //     for (let i = len, j = 0; i < s.length; i++, j++) {
  //         // adjust the map - we add char at i and drop the one at j
  //         let charAddCount = map.get(s[i]) || 0;
  //         map.set(s[i], charAddCount + 1);

  //         let charDropCount = map.get(s[j]);
  //         if (charDropCount === 1) {
  //             map.delete(s[j]);
  //         } else {
  //             map.set(s[j], charDropCount - 1);
  //         }

  //         if (map.size <= k) {
  //             return true;
  //         }
  //     }

  //     return false;
  // }

  // let low = 1, high = s.length, result = 1;
  // while (low <= high) {
  //     const mid = Math.floor((low + high)/2);
  //     if (_doesSubstringExist(mid)) {
  //         result = mid;
  //         low = mid + 1;
  //     } else {
  //         high = mid - 1;
  //     }
  // }

  // return result;

  // Sliding Window - Window contains <= k distinct characters.
  let maxLen = 0;
  // map tracks the counts of the distinct characters in the window.
  for (let map = new Map(), left = 0, right = 0; right < s.length; right++) {
    // Add s[right] into the window.
    const rcount = map.get(s[right]) || 0;
    map.set(s[right], rcount + 1);

    while (left <= right && map.size > k) {
      const lcount = map.get(s[left]);
      if (lcount > 1) {
        map.set(s[left], lcount - 1);
      } else {
        map.delete(s[left]);
      }
      left++;
    }

    // Invariant fixed here - map contains <= k distinct characters.
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
