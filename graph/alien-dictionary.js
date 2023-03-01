// https://leetcode.com/problems/alien-dictionary/
// tags - graph
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  // Given words.length >= 1.
  if (words.length === 1) {
    const set = new Set(words[0]);
    return Array.from(set).join("");
  }

  // Construct the adjacency list. There's an edge between 2 chars if the first char comes before the second.
  const al = new Map();
  // Map each char to the number of chars that come before it.
  const numBefore = new Map();
  for (const word of words) {
    for (const char of word) {
      al.set(char, new Set());
      numBefore.set(char, 0);
    }
  }

  for (let i = 1; i < words.length; i++) {
    const curr = words[i],
      prev = words[i - 1];
    for (let j = 0; j < curr.length && j < prev.length; j++) {
      if (curr[j] !== prev[j]) {
        // Don't store the same edge multiple times.
        if (!al.get(prev[j]).has(curr[j])) {
          al.get(prev[j]).add(curr[j]);
          numBefore.set(curr[j], numBefore.get(curr[j]) + 1);
        }
        break;
      }
      // If the current word is a prefix of the previous word & shorter than it
      // then words, not being in lexicographical order, return ''.
      if (j === curr.length - 1 && j < prev.length - 1) {
        return "";
      }
    }
  }

  // Apply Kahn's algorithm for topological sorting.
  const queue = [];
  for (const [char, count] of numBefore.entries()) {
    if (count === 0) queue.push(char);
  }

  const ordered = [];
  while (queue.length > 0) {
    const c = queue.shift();
    ordered.push(c);
    for (const cn of al.get(c)) {
      const count = numBefore.get(cn);
      if (count === 1) queue.push(cn);
      numBefore.set(cn, count - 1);
    }
  }
  return ordered.length === al.size ? ordered.join("") : "";
};
