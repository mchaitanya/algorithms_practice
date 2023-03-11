// https://leetcode.com/problems/brace-expansion/
// tags - string
/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function (s) {
  const options = [];
  for (let i = 0, seenBrace = false, chars = []; i < s.length; i++) {
    if (s[i] === "{") {
      seenBrace = true;
    } else if (s[i] === "}") {
      options.push(chars.sort());
      seenBrace = false;
      chars = [];
    } else if (s[i] === ",") {
      // Skip
    } else if (seenBrace) {
      chars.push(s[i]);
    } else {
      options.push([s[i]]);
    }
  }

  // Return words we can create starting from index i.
  function create(i) {
    if (i === options.length) return [""];
    const strings = [];
    const substrings = create(i + 1);
    for (const char of options[i]) {
      for (const sub of substrings) {
        strings.push(char + sub);
      }
    }
    return strings;
  }

  return create(0);
};
