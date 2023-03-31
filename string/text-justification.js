// https://leetcode.com/problems/text-justification/
// tags - string
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  for (let i = 0; i < words.length; ) {
    let width = 0;
    const line = [];
    while (i < words.length) {
      const spaceRequired = words[i].length + (line.length > 0 ? 1 : 0);
      if (width + spaceRequired > maxWidth) break;
      width += spaceRequired;
      if (line.length > 0) line.push(" ");
      line.push(words[i]);
      i++;
    }

    if (line.length === 1 || i === words.length) {
      result.push(line.join("") + " ".repeat(maxWidth - width));
    } else {
      let spaceDistribute = maxWidth - width;
      let i = 1;
      while (spaceDistribute > 0) {
        spaceDistribute--;
        line[i] += " ";
        i += 2;
        if (i >= line.length) i = 1;
      }
      result.push(line.join(""));
    }
  }

  return result;
};

/*

[
"This    is    an",
"example  of text",
"justification.  "
]
[
"What   must   be",
"acknowledgment  ",
"shall be        "
]
[
"Science  is  what we",
"understand      well",
"enough to explain to",
"a  computer.  Art is",
"everything  else  we",
"do                  "
]

*/
