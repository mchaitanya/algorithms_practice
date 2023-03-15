// https://leetcode.com/problems/keyboard-row/
// tags - string
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  const result = [];
  scan: for (let i = 0; i < words.length; i++) {
    let row;
    const word = words[i].toLowerCase();
    for (let r of rows) {
      if (r.has(word[0])) {
        row = r;
        break;
      }
    }

    for (let i = 1; i < word.length; i++) {
      if (!row.has(word[i])) {
        continue scan;
      }
    }
    result.push(words[i]);
  }
  return result;

  // // Map each letter to the row it's on.
  // const codeA = 'a'.charCodeAt(0);
  // const mapping = new Array(26).fill(0);
  // const row1 = "asdfghjkl";
  // for (let i = 0; i < row1.length; i++) {
  //     mapping[row1.charCodeAt(i) - codeA] = 1;
  // }
  // const row2 = "zxcvbnm";
  // for (let i = 0; i < row2.length; i++) {
  //     mapping[row2.charCodeAt(i) - codeA] = 2;
  // }

  // const result = [];
  // scan: for (let i = 0; i < words.length; i++) {
  //     const word = words[i].toLowerCase();
  //     const row = mapping[word.charCodeAt(0) - codeA]; // Given each word has >= 1 letter
  //     for (let i = 1; i < word.length; i++) {
  //         if (mapping[word.charCodeAt(i) - codeA] !== row) {
  //             continue scan;
  //         }
  //     }
  //     result.push(words[i]);
  // }
  // return result;
};
