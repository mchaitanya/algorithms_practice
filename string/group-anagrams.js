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
        
    // the generator is responsible for giving us the next prime
    function* _getPrimes() {
        const seen = [];
        search:
        for (let n = 2; ; n++) {
            for (let p of seen) {
                if (n % p === 0) { // divisible by a prime seen before
                    continue search;
                }
            }
            seen.push(n);
            yield n;
        }
    }
    
    const primeMap = new Map();
    const primes = _getPrimes();
    // here we just keep track of the `primeMap`
    // we don't mix constructing the map with generating the primes
    for (let count = 0, code = 'a'.charCodeAt(0); count < 26; count++, code++) {
        let {value:prime} = primes.next();
        primeMap.set(String.fromCharCode(code), prime);
        
    }
    // console.log(primeMap);
    
    const anagramMap = new Map();
    for (let str of strs) {
        const key = str.split('').reduce((prod, char) => prod * primeMap.get(char), 1);
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key).push(str);
    }
    
    return Array.from(anagramMap.values());
    
};