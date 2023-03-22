// https://leetcode.com/problems/find-and-replace-in-string/
// tags - string
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const findReplace = indices.map(
    (index, i) => new FindReplace(index, sources[i], targets[i])
  );
  // Sort in increasing order by index.
  findReplace.sort((fr1, fr2) => fr1.index - fr2.index);

  const result = [];
  for (let i = 0, j = 0; i < s.length; ) {
    if (j >= findReplace.length || i !== findReplace[j].index) {
      result.push(s[i]);
      i++;
    } else {
      const { source, target } = findReplace[j];
      if (i === s.indexOf(source, i)) {
        result.push(target);
        i += source.length;
      } else {
        result.push(s[i]);
        i++;
      }
      j++;
    }
  }
  return result.join("");
};

class FindReplace {
  constructor(index, source, target) {
    this.index = index;
    this.source = source;
    this.target = target;
  }
}
