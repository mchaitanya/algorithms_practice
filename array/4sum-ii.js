// https://leetcode.com/problems/4sum-ii/
// tags - array
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    // map each sum to number of combinations that result in it
    const map = new Map();
    for (let k = 0; k < C.length; k++) {
        for (let m = 0; m < D.length; m++) {
            let count = map.get(C[k] + D[m]) || 0;
            map.set(C[k] + D[m], count+1);
        }
    }
    
    
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            count += (map.get(-A[i] - B[j]) || 0);
        }
    }
    return count;
};