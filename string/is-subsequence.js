// https://leetcode.com/problems/is-subsequence/
// tags - string
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  //     if (s === '') {
  //         return true;
  //     }

  //     // i iterates over s
  //     // j iterates over t
  //     for (let i = 0, j = 0; j < t.length; j++) {
  //         if (s[i] === t[j]) {
  //             i++; // there's a match, move i forward
  //             if (i === s.length) {
  //                 return true;
  //             }
  //         }

  //     }
  //     return false;

  //     // recursive
  //     if (s === '') {
  //         return true;
  //     } else if (t === '') {
  //         return false;
  //     }

  //     if (s[0] === t[0]) {
  //         return isSubsequence(s.slice(1), t.slice(1));
  //     } else {
  //         return isSubsequence(s, t.slice(1));
  //     }

  function _binarySearch(arr, key) {
    // key may not be found in arr, find first entry greater than key
    let low = 0,
      high = arr.length - 1;
    let ix = -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === key) {
        return mid === arr.length - 1 ? -1 : mid + 1;
      } else if (arr[mid] > key) {
        // left half
        ix = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ix;
  }

  // character indices hashmap
  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], []);
    }
    map.get(t[i]).push(i);
  }
  // console.log(map);

  for (let i = 0, j = undefined; i < s.length; i++) {
    if (!map.has(s[i])) {
      return false;
    }

    const ixs = map.get(s[i]);
    if (j === undefined) {
      j = ixs[0];
      continue;
    }
    // pick an index > j - linear search
    //         for (let k = 0; k < ixs.length; k++) {
    //             if (j === undefined || ixs[k] > j) {
    //                 j = ixs[k];
    //                 break;
    //             }

    //             if (k === ixs.length-1) {
    //                 return false;
    //             }
    //         }
    // binary search
    let k = _binarySearch(ixs, j);
    if (k === -1) {
      return false;
    }
    j = ixs[k];
  }

  return true;
  
};
