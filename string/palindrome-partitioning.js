// https://leetcode.com/problems/palindrome-partitioning/
// tags - string, palindrome
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // can be solved recursively
    // start cutting up palindromic substrings from the start, make recursive subcall for leftover
    
    function _isPalindrome(start, end) {
        for (let i = start, j = end; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;
    }
    
    // introduce memoization
    const memo = Array(s.length+1).fill(null);
    memo[s.length] = [[]];
    function _createPartitions(start=0) {
        if (memo[start] != null) {
            return memo[start];
        }
        
        const result = [];
        for (let i = start; i < s.length; i++) {
            if (!_isPalindrome(start, i)) continue;
            // 0, ... i is palindromic
            let cut = s.slice(start,i+1); // i is inclusive
            for (let sub of _createPartitions(i+1)) {
                result.push([cut, ...sub]);
            }
        }
        
        memo[start] = result;
        return result;
    }
    
    return _createPartitions();
    
};
