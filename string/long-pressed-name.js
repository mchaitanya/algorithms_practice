// https://leetcode.com/problems/long-pressed-name/
// tags - string
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  function _getCharGroups(s) {
    const result = [];
    for (let i = 0, count = 0; i < s.length; i++) {
      count++;
      if (i === s.length - 1 || s[i] !== s[i + 1]) {
        result.push([s[i], count]);
        count = 0;
      }
    }
    return result;
  }

  const nameGroups = _getCharGroups(name);
  const typedGroups = _getCharGroups(typed);
  if (nameGroups.length !== typedGroups.length) {
    return false;
  }

  for (let i = 0; i < nameGroups.length; i++) {
    const [nameChar, nameCount] = nameGroups[i];
    const [typedChar, typedCount] = typedGroups[i];
    if (nameChar !== typedChar || nameCount > typedCount) {
      return false;
    }
  }
  return true;

  // for (let i = 0, j = 0; i < name.length || j < typed.length; i++, j++) {
  //     if (i === name.length || j === typed.length) return false;
  //     if (name[i] !== typed[j]) return false;

  //     let nameCount = 1;
  //     while (i+1 < name.length && name[i+1] === name[i]) {
  //         nameCount++;
  //         i++;
  //     }

  //     let typedCount = 1;
  //     while (j+1 < typed.length && typed[j+1] === typed[j]) {
  //         typedCount++;
  //         j++;
  //     }

  //     if (nameCount > typedCount) return false;
  // }
  // return true;
};
