// https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
// tags - string
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  let result = "";
  const map = new Map(knowledge);
  for (let i = 0, seenBrace = false, key = ""; i < s.length; i++) {
    if (s[i] === "(") {
      seenBrace = true;
    } else if (seenBrace) {
      if (s[i] === ")") {
        result += map.get(key) ?? "?";
        seenBrace = false;
        key = "";
      } else {
        key += s[i];
      }
    } else {
      result += s[i];
    }
  }
  return result;
};
