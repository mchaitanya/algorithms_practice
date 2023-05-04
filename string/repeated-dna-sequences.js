// https://leetcode.com/problems/repeated-dna-sequences/
// tags - string
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const result = [];
  const map = new Map();
  for (let i = 0; i + 10 <= s.length; i++) {
    const seq = s.slice(i, i + 10);
    const count = map.get(seq) || 0;
    map.set(seq, count + 1);
    if (count === 1) result.push(seq);
  }
  return result;
};
