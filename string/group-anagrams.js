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
        
        let primes = [];
        for (let count = 0, num = 2; count < 26; num++) {
            let isPrime = true;
            // check divisibility against the primes found so far
            for (let p of primes) {
                if (num % p === 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
                primes.push(num);
                count++;
            }
        }
        
        // console.log(primes);
        
        let primeMap = new Map();
        for (let i = 0, code = 'a'.charCodeAt(0); i < 26; i++, code++) {
            primeMap.set(String.fromCharCode(code), primes[i]);
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