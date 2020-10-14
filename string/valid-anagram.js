// https://leetcode.com/problems/valid-anagram/
// tags - string, hash-table
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    // store character counts from s in a map
    for (const c of s) {
        const count = map.get(c) || 0;
        map.set(c, count+1);
    }
    
    // decrement counts & delete characters from t
    for (const c of t) {        
        count = map.get(c);
        if (count == undefined) {
            return false;
        } else if (count === 1) {
            map.delete(c);
        } else {
            map.set(c, count - 1);
        }
        
    }
    
    // check if map is empty
    return map.size === 0;
    
    // INTERESTING APPROACH - prime factor decomposition
    // https://yangshun.github.io/tech-interview-handbook/algorithms/string/#anagram
    // map each letter to a prime number, multiply all the mapped numbers - both strings should result in the same product
    // fails on the last test case - both products grow too large to fit in a JS number

    // // map each lowercase letter to a prime number
    // let _primeMap = new Map();
    // // stop when we find 26 primes - one for each letter
    // for (let i = 2, count = 0; count < 26; i++) {
    //     // check i against the primes found so far
    //     let isPrime = true;
    //     for (let j = 0; j < count; j++) {
    //         let char = String.fromCharCode('a'.charCodeAt(0) + j);
    //         if (_primeMap.has(char) && (i % _primeMap.get(char) === 0)) {
    //             isPrime = false;
    //             break; // i is divisible by one of previously found primes
    //         }
    //     }
        
    //     if (isPrime) {
    //         let char = String.fromCharCode('a'.charCodeAt(0) + count);
    //         _primeMap.set(char, i);
    //         count++;
    //     }
        
    // }
    
    // function _computeProduct(str) {
    //     let product = 1;
    //     for (let char of str) {
    //         product = (product * _primeMap.get(char));
    //     }
    //     return product;
    // }
    
    // return _computeProduct(s) === _computeProduct(t);
};