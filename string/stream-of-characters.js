// https://leetcode.com/problems/stream-of-characters/
// tags - string
/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
  this.words = words;
  this.queue = []; // Queue to store incoming letters.
  this.size = 0; // The queue can grow up to the size of the longest word.
  for (let w of words) {
    if (w.length > this.size) this.size = w.length;
  }
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  if (this.queue.length === this.size) this.queue.shift();
  this.queue.push(letter);
  // return this.match(0, this.words);

  let i = 0;
  let numLeft = this.words.length;
  const eliminated = new Array(numLeft).fill(false);
  while (numLeft > 0 && i < this.queue.length) {
    const letter = this.queue[this.queue.length - 1 - i];
    for (let w = 0; w < this.words.length; w++) {
      if (eliminated[w]) continue;
      const word = this.words[w];
      const index = word.length - 1 - i;
      if (word[index] !== letter) {
        eliminated[w] = true;
        numLeft--;
      } else if (index === 0) {
        return true;
      }
    }
    i++;
  }
  return false;
};

// THIS IS TAIL-RECURSIVE - MAKE IT ITERATIVE.
// // i - The character from the right we're trying to match
// // candidates - Words that can potentially match
// StreamChecker.prototype.match = function(i, candidates) {
//     if (candidates.length === 0 || i === this.queue.length) return false;
//     const next = [];
//     const letter = this.queue[this.queue.length-1-i];
//     for (const word of candidates) {
//         const index = word.length-1-i;
//         if (word[index] === letter) {
//             if (index === 0) {
//                 return true;
//             } else { // index > 0
//                 next.push(word);
//             }
//         }
//     }
//     return this.match(i+1, next);
// }

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
