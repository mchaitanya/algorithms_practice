// https://leetcode.com/problems/expressive-words/
// tags - string
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (S, words) {
  // Extract runs in s.
  const runsS = [];
  for (let i = 0, count = 0; i < s.length; i++) {
    count++;
    if (i === s.length - 1 || s[i] !== s[i + 1]) {
      runsS.push([s[i], count]);
      count = 0;
    }
  }

  function isStretchy(w) {
    // j is an index into runsS
    let j = 0;
    for (let i = 0, count = 0; i < w.length; i++) {
      count++;
      if (i === w.length - 1 || w[i] !== w[i + 1]) {
        const [charS, countS] = runsS[j];
        if (
          w[i] !== charS ||
          count > countS ||
          (count < countS && countS < 3)
        ) {
          return false;
        }
        count = 0;

        j++;
        if (j === runsS.length && i < w.length - 1) {
          return false;
        }
      }
    }
    return j === runsS.length;
  }

  let numStretchy = 0;
  for (const w of words) {
    if (isStretchy(w)) numStretchy++;
  }
  return numStretchy;

  // // extension operation - choose a group - character c, add more 'c's so the group size >= 3
  // function _createCountArray(word) {
  //     const arr = [];
  //     for (let i = 0, count = 0; i < word.length; i++) {
  //         count++;
  //         if (i+1 == word.length || word[i+1] !== word[i]) {
  //             arr.push([word[i], count]);
  //             count = 0;
  //         }
  //     }
  //     return arr;
  // }
  // const arrS = _createCountArray(S);
  // function _isStretchable(word) {
  //     const arr = _createCountArray(word);
  //     if (arrS.length !== arr.length) {
  //         return false;
  //     }
  //     for (let i = 0; i < arrS.length; i++) {
  //         const [charS, countS] = arrS[i];
  //         const [char, count] = arr[i];
  //         if (charS !== char) {
  //             return false;
  //         } else if (countS < 3 && (count !== countS)) {
  //             return false;
  //         } else if (countS >= 3 && count > countS) {
  //             return false;
  //         }
  //     }
  //     return true;
  // }
  // let numStretchable = 0;
  // for (let word of words) {
  //     if (_isStretchable(word)) {
  //         numStretchable++;
  //     }
  // }
  // // return words.reduce((count, word) => _isStretchable(word) ? count++ : count, 0);
  // return numStretchable;
};
