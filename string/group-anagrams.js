// https://leetcode.com/problems/group-anagrams/
// tags - string
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //     let map = new Map();
    //     for (let str of strs) {
    //         const key = str.split('').sort().join('');
    //         const anagrams = map.get(key) || [];
    //         map.set(key, anagrams.concat(str));
    //     }
        
    //     return Array.from(map.values());
        
    let primeMap = new Map();
    search:
    for (let count = 0, num = 2, code = 'a'.charCodeAt(0); count < 26; num++) {
        // check divisibility against the primes found so far
        for (let p of primeMap.values()) {
            if (num % p === 0) {
                continue search;
            }
        }
        
        // num is a prime if we reach here
        primeMap.set(String.fromCharCode(code), num);
        count++;
        code++;
    }
    // console.log(primeMap);
    
    let anagramMap = new Map();
    for (let str of strs) {
        const key = str.split('').reduce((prod, char) => prod * primeMap.get(char), 1);
        const anagrams = anagramMap.get(key) || [];
        anagramMap.set(key, anagrams.concat(str));
    }
    
    return Array.from(anagramMap.values());
    
};