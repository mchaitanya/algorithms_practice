// https://leetcode.com/problems/sort-array-by-parity/
// tags - array
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    // const odds = A.filter(n => n%2 == 1);
    // const evens = A.filter(n => n%2 == 0);
    // return [...evens, ...odds];
    
    let i = 0; // index to insert next even
    let j = A.length - 1; // index to insert next odd
    let result = Array(A.length);
    for (let k = 0; k < A.length; k++) {
        if (A[k]%2 === 0) {
            result[i] = A[k];
            i++;
        } else {
            result[j] = A[k];
            j--;
        }
    }
    
    return result;
};