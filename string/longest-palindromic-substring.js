// https://leetcode.com/problems/longest-palindromic-substring/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  let longest = "";
  // Odd palindromes
  for (let i = 0; i < s.length; i++) {
    const odd = expand(i, i);
    if (odd.length > longest.length) {
      longest = odd;
    }
  }

  // Even palindromes
  for (let i = 0; i < s.length - 1; i++) {
    const even = expand(i, i + 1);
    if (even.length > longest.length) {
      longest = even;
    }
  }
  return longest;

  // //     if (s === '') {
  // //         return '';
  // //     }
  // //     function _isPalindrome(start, end) {
  // //         for (let i = start, j = end-1; i < j; i++, j--) {
  // //             if (s[i] !== s[j]) {
  // //                 return false;
  // //             }
  // //         }
  // //         return true;
  // //     }
  // //     function _findPalindrome(size) {
  // //         for (let i = 0, j = i+size; j <= s.length; i++, j++) {
  // //             if (_isPalindrome(i,j)) {
  // //                 return s.slice(i,j);
  // //             }
  // //         }
  // //         return null;
  // //     }
  // //     // brute force - O(n^3)
  // //     for (let size = s.length; size >= 1; size--) {
  // //         const temp = _findPalindrome(size);
  // //         if (temp != null) {
  // //             return temp;
  // //         }
  // //     }
  //     // // binary search the solution space - even you get it working, it'll be O(n^2logn)
  //     // let result = '';
  //     // let low = 1, high = s.length-1;
  //     // while (low <= high) {
  //     //     const mid = Math.floor((low+high)/2);
  //     //     const maybePalindrome = _findPalindrome(mid);
  //     //     console.log(mid, maybePalindrome);
  //     //     if (maybePalindrome != null) {
  //     //         result = maybePalindrome;
  //     //         low = mid+1; // maybe there's an even longer palindrome
  //     //     } else {
  //     //         high = mid-1;
  //     //     }
  //     // }
  //     // return result;
  //     // expand around center
  //     function _getLongestPalindromeAround(left, right) {
  //         // assume we send a valid palindrome in here - check if it can be extended
  //         if (left-1 < 0 || right+1 >= s.length || s[left-1] !== s[right+1]) {
  //             return s.substring(left, right+1); // both left and right are inclusive
  //         } else {
  //             return _getLongestPalindromeAround(left-1, right+1);
  //         }
  //     }
  //     function _selectLongest(...strs) {
  //         return strs.reduce((longest, curr) => {
  //             return (curr.length > longest.length ? curr : longest);
  //         }, '');
  //     }
  //     let longest = '';
  //     for (let i = 0; i < s.length; i++) {
  //         // odd palindrome
  //         let po = _getLongestPalindromeAround(i, i);
  //         // even palindrome
  //         let pe = '';
  //         if (i < s.length-1 && s[i] === s[i+1]) {
  //             pe = _getLongestPalindromeAround(i, i+1);
  //         }
  //         longest = _selectLongest(longest, po, pe);
  //     }
  //     return longest;
};
