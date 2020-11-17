// https://leetcode.com/problems/long-pressed-name/
// tags - string
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    function _getCharGroups(s) {
        const result = [];
        for (let i = 0, count = 0; i < s.length; i++) {
            count++;
            if (i === s.length-1 || s[i] !== s[i+1]) {
                result.push([s[i], count])
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
    
};