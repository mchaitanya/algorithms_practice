// https://leetcode.com/problems/longest-common-subsequence/
// tags - dynamic-programming
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // Solve top-down with memoization.
  const memo = new Array(text1.length);
  for (let i = 0; i < text1.length; i++) {
    memo[i] = new Array(text2.length).fill(null);
  }

  function lcs(idx1, idx2) {
    if (idx1 === text1.length || idx2 === text2.length) return 0;
    if (memo[idx1][idx2] != null) return memo[idx1][idx2];

    if (text1[idx1] === text2[idx2]) {
      memo[idx1][idx2] = 1 + lcs(idx1 + 1, idx2 + 1);
    } else {
      memo[idx1][idx2] = Math.max(lcs(idx1, idx2 + 1), lcs(idx1 + 1, idx2));
    }
    return memo[idx1][idx2];
  }

  return lcs(0, 0);

  // // state is a 2-d array
  // // state[i][j] = length of the LCS of text1.substring(0,i) & text2.substring(0,j)
  // const state = Array(text1.length + 1);
  // for (let i = 0; i <= text1.length; i++) {
  //     state[i] = Array(text2.length + 1).fill(0);
  // }

  // for (let i = 1; i <= text1.length; i++) {
  //     for (let j = 1; j <= text2.length; j++) {
  //         if (text1[i-1] === text2[j-1]) {
  //             // if there's a match, then increment state[i-1][j-1]
  //             // you don't want to check state[i-1][j] or state[i][j-1]
  //             // because you don't want to consider the same char again
  //             state[i][j] = state[i-1][j-1] + 1;
  //         } else {
  //             // otherwise you can arrive at state[i][j] in 2 ways, pick the max of the 2
  //             // - from state[i-1][j] by adding in a char from text1
  //             // - from state[i][j-1] by adding in a char from text2
  //             state[i][j] = Math.max(state[i-1][j], state[i][j-1]);
  //         }

  //     }
  // }

  // // for (let i = 0; i <= text1.length; i++) {
  // //     let line = '';
  // //     for (let j = 0; j <= text2.length; j++) {
  // //         line += (state[i][j] + ' ');
  // //     }
  // //     console.log(line);
  // // }

  // return state[text1.length][text2.length];
};
