// https://leetcode.com/problems/generalized-abbreviation
// tags - string
/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function (word) {
  // function isDigit(char) {
  //     return /[0-9]/.test(char);
  // }
  const digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

  // Return abbreviations from index i upto the end.
  function abbreviate(i) {
    if (i === word.length) return [""];
    const result = [];
    const subResult = abbreviate(i + 1);
    for (const sub of subResult) {
      result.push(word[i] + sub);
      let k = 0;
      while (digits.has(sub[k])) k++;
      if (k === 0) {
        result.push("1" + sub);
      } else {
        result.push(String(Number(sub.slice(0, k)) + 1) + sub.slice(k));
      }
    }
    return result;
  }

  return abbreviate(0);

  // function abbreviate(left, right) {
  //     if (left > right) return [''];
  //     const abbrs = new Set([String(right-left+1)]);
  //     for (let i = left; i <= right; i++) {
  //         const leftAbbrs = abbreviate(left, i-1);
  //         const rightAbbrs = abbreviate(i+1, right);
  //         for (const leftAbbr of leftAbbrs) {
  //             for (const rightAbbr of rightAbbrs) {
  //                 abbrs.add(leftAbbr + word[i] + rightAbbr);
  //             }
  //         }
  //     }
  //     return Array.from(abbrs);
  // }
  // return abbreviate(0, word.length-1);
};
