// https://leetcode.com/problems/palindromic-substrings/
// tags - string, palindrome
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    //     function _isPalindromic(i, j) {
    //         while (i < j) {
    //             if (s[i] != s[j]) {
    //                 return false;
    //             }
    //             i++;
    //             j--;
    //         }
    //         return true;
    //     }
        
    //     // brute force - gets accepted
    //     let count = 0;
    //     for (let start = 0; start < s.length; start++) {
    //         for (let end = start; end < s.length; end++) {
    //             if (_isPalindromic(start, end)) {
    //                 count++;
    //             }
    //         }
    //     }
    //     return count;
        
        
        // check if a letter/2 consecutive letters can be the middle of a palindrome
        // expand around center?
        function _countExpandingFrom(left, right) {
            if (left < 0 || right >= s.length || s[left] !== s[right]) {
                return 0;
            } else {
                return 1 + _countExpandingFrom(left-1, right+1);
            }
        }
        
        let count = 0;
        // odd palindromes
        for (let i = 0; i < s.length; i++) {
            count += _countExpandingFrom(i, i);
        }
        
        // even palindromes
        for (let i = 0; i < s.length-1; i++) {
            count += _countExpandingFrom(i, i+1);
        }
        
        return count;
        
    };