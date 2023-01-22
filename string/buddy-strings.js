// https://leetcode.com/problems/buddy-strings
// tags - string
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;

  const distinct = new Set(s);
  // If there are repeated chars, we can swap them.
  if (s === goal) return s.length !== distinct.size;

  let diff1, diff2;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === goal[i]) continue;
    if (diff1 == undefined) {
      diff1 = i;
    } else if (diff2 == undefined) {
      diff2 = i;
    } else {
      return false;
    }
  }

  // diff2 will be undefined if s & goal only differ in one position.
  return (
    diff2 !== undefined && s[diff1] === goal[diff2] && s[diff2] === goal[diff1]
  );

  // const letters = s.split('');
  // for (let i = 0; i < s.length; i++) {
  //     for (let j = i+1; j < s.length; j++) {
  //         [letters[i], letters[j]] = [letters[j], letters[i]]; // Swap the letters.
  //         if (letters.join('') === goal) {
  //             return true;
  //         }
  //         [letters[i], letters[j]] = [letters[j], letters[i]]; // Swap them back.
  //     }
  // }
  // return false;
};
