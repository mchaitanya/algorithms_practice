// https://leetcode.com/problems/backspace-string-compare/
// tags - string
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const BACKSPACE = '#';
    // get string after applying the backspaces 
    function _applyBackspaces(str) {
        // do it with a stack
        const stack = [];
        for (let char of str) {
            if (char === BACKSPACE && stack.length > 0) {
                stack.pop();
            } else if (char !== BACKSPACE) {
                stack.push(char);
            }
        }
        return stack.join('');
    }
    
    return _applyBackspaces(S) === _applyBackspaces(T);
    
};