// https://leetcode.com/problems/subarray-sums-divisible-by-k/
// tags - array, dynamic-programming
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    // // brute force - nested loop O(n^2) - time limit exceeded
    // let count = 0;
    // for (let i = 0; i < A.length; i++) {
    //     // i = start of subarray
    //     let sum = 0;
    //     for (let j = i; j < A.length; j++) {
    //         sum += (A[j] % K);
    //         if (sum % K === 0) {
    //             count++;
    //         }
    //     }
    // }
    // return count;
    
    
    // solve with DP
    // identity - (a + b + c)%k = (a%k + b%k + c%k)%k
    
    // -2 % 5 results in -2 - won't work with our state array
    // preprocess A - for each negative number, add a muliple of 5 to make it positive
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            A[i] += (Math.ceil(-A[i] / K) * K);
        }
    }
    
    let prevState = Array(K).fill(0);
    prevState[A[0] % K] = 1;
    let count = prevState[0];
    
    for (let i = 1; i < A.length; i++) {
        let state = Array(K).fill(0);
        const mod =  (A[i] % K);
        state[mod] = 1;
        
        for (let j = 0; j < K; j++) {
            const temp = ((j + mod) % K);
            state[temp] += prevState[j];
        }
        
        prevState = state;
        count += prevState[0];
        
    }
    
    return count;
    
};