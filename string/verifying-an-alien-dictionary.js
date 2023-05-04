// https://leetcode.com/problems/verifying-an-alien-dictionary/
// string
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // Map each char to its position.
  const position = new Map();
  for (let i = 0; i < order.length; i++) {
    position.set(order[i], i);
  }

  function comesBefore(w1, w2) {
    for (let i = 0; i < w1.length && i < w2.length; i++) {
      if (w1[i] !== w2[i]) {
        return position.get(w1[i]) < position.get(w2[i]);
      }
    }
    return w1.length <= w2.length;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!comesBefore(words[i], words[i + 1])) return false;
  }
  return true;
};
