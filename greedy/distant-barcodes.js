// https://leetcode.com/problems/distant-barcodes/
// tags - greedy
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  // Solution adapted from:
  // https://leetcode.com/problems/reorganize-string/solutions/232469/java-no-sort-o-n-0ms-beat-100/
  const map = new Map();
  for (const barcode of barcodes) {
    const count = map.get(barcode) || 0;
    map.set(barcode, count + 1);
  }

  const result = new Array(barcodes.length).fill(0);
  const sorted = Array.from(map.keys()).sort(
    (b1, b2) => map.get(b2) - map.get(b1)
  );
  // i is the index into sorted; j the index into result.
  for (let i = 0, j = 0; i < sorted.length; i++) {
    let count = map.get(sorted[i]);
    while (count > 0) {
      while (result[j] !== 0) j++;
      result[j] = sorted[i];
      j = (j + 2) % result.length;
      count--;
    }
  }
  return result;
};
