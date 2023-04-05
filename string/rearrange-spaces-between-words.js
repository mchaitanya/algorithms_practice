// https://leetcode.com/problems/rearrange-spaces-between-words/
// tags - string
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const words = text.trim().split(/\s+/);
  let numSpaces = 0;
  for (const char of text) {
    if (char === " ") numSpaces++;
  }

  if (words.length === 1) {
    return words[0] + " ".repeat(numSpaces);
  } else {
    const numSpacesBetween = Math.floor(numSpaces / (words.length - 1));
    const numSpacesEnd = numSpaces % (words.length - 1);
    return words.join(" ".repeat(numSpacesBetween)) + " ".repeat(numSpacesEnd);
  }
};
