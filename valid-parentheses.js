// https://leetcode.com/problems/valid-parentheses/
// tags - string, stack
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    
    const stack = [];
    for (const bracket of s) {
        if (opening.includes(bracket)) {
            stack.push(bracket);
        } else {
            const idx = closing.indexOf(bracket);
            if (opening[idx] !== stack.pop()) {
                return false;
            }
        }
    }
    
    // check if stack is empty after processing the string
    return stack.length == 0;
    
};