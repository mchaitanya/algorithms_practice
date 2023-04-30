// https://leetcode.com/problems/sentence-similarity/
// tags - string
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;

  // Map each word to the set of words it is similar to.
  const map = new Map();
  for (const [w1, w2] of similarPairs) {
    if (!map.has(w1)) map.set(w1, new Set());
    map.get(w1).add(w2);
    if (!map.has(w2)) map.set(w2, new Set());
    map.get(w2).add(w1);
  }

  for (let i = 0; i < sentence1.length; i++) {
    const w1 = sentence1[i],
      w2 = sentence2[i];
    if (w1 === w2) {
      continue;
    } else if (!map.has(w1) || !map.get(w1).has(w2)) {
      return false;
    }
  }
  return true;
};
