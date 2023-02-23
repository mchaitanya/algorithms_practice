// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
    const count = map.get(n) || 0;
    map.set(n, count + 1);
  }

  const intersection = [];
  for (const n of nums2) {
    if (map.has(n)) {
      intersection.push(n);
      const count = map.get(n);
      if (count > 1) {
        map.set(n, count - 1);
      } else {
        map.delete(n);
      }
    }
  }
  return intersection;

  // function createFreqMap(arr) {
  //     const map = new Map();
  //     for (const elem of arr) {
  //         const count = map.get(elem) || 0;
  //         map.set(elem, count+1);
  //     }
  //     return map;
  // }

  // const map1 = createFreqMap(nums1);
  // const map2 = createFreqMap(nums2);
  // const intersection = [];
  // for (const num of map1.keys()) {
  //     if (map2.has(num)) {
  //         let count = Math.min(map1.get(num), map2.get(num));
  //         while (count > 0) {
  //             intersection.push(num);
  //             count--;
  //         }
  //     }
  // }
  // return intersection;
};
