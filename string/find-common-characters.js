// https://leetcode.com/problems/find-common-characters/
// tags - string
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const CODE_A = "a".charCodeAt(0);

  function countChars(word) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      counts[word.charCodeAt(i) - CODE_A]++;
    }
    return counts;
  }

  const counts = new Array(26).fill(Infinity);
  for (const w of words) {
    const countsW = countChars(w);
    for (let i = 0; i < 26; i++) {
      counts[i] = Math.min(counts[i], countsW[i]);
    }
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(CODE_A + i);
    for (let j = 0; j < counts[i]; j++) {
      result.push(char);
    }
  }
  return result;

  // // strings only contain lowercase chars - store counts in an array of size 26
  // // map each char to its index
  // const map = new Map();
  // for (let i = 0, code = 'a'.charCodeAt(0); i < 26; i++, code++) {
  //     map.set(String.fromCharCode(code), i);
  // }

  // const countArrays = Array(A.length);
  // for (let i = 0; i < A.length; i++) {
  //     countArrays[i] = Array(26).fill(0);
  //     for (let char of A[i]) {
  //         countArrays[i][map.get(char)]++;
  //     }
  // }

  // const result = [];
  // for (let i = 0, code = 'a'.charCodeAt(0); i < 26; i++, code++) {
  //     let min = Number.MAX_VALUE;
  //     for (let j = 0; j < A.length; j++) {
  //         if (countArrays[j][i] < min) {
  //             min = countArrays[j][i];
  //         }
  //     }

  //     const char = String.fromCharCode(code);
  //     for (let j = 0; j < min; j++) {
  //         result.push(char);
  //     }
  // }

  // return result;
};
