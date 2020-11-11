// https://leetcode.com/problems/longest-palindromic-substring/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === '') {
        return '';
    }
    
    function _isPalindrome(start, end) {
        for (let i = start, j = end-1; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;
    }
    
    function _findPalindrome(size) {
        for (let i = 0, j = i+size; j <= s.length; i++, j++) {
            if (_isPalindrome(i,j)) {
                return s.slice(i,j);
            }
        }
        return null;
    }

    // // binary search the solution space - won't work as-is
    // // if there's no palindrome of length 2, can't say there isn't one of length 3
    // let result = '';
    // let low = 1, high = s.length-1;
    // while (low <= high) {
    //     const mid = Math.floor((low+high)/2);
    //     const maybePalindrome = _findPalindrome(mid);
    //     console.log(mid, maybePalindrome);
    //     if (maybePalindrome != null) {
    //         result = maybePalindrome;
    //         low = mid+1; // maybe there's an even longer palindrome
    //     } else {
    //         high = mid-1;
    //     }
    // }
    // return result;
    
    for (let size = s.length; size >= 1; size--) {
        const temp = _findPalindrome(size);
        if (temp != null) {
            return temp;
        }
    }
    
};