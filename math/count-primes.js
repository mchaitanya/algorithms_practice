// https://leetcode.com/problems/count-primes/
// tags - math, primes
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    //     const primes = [2];
    //     for (let i = 3; i < n; i = i+2) {
    //         let isPrime = true;
    //         // check divisibility against primes found so far
    //         for (let p of primes) {
    //             if (i % p === 0) {
    //                 isPrime = false;
    //                 break;
    //             }
    //         }
            
    //         if (isPrime) {
    //             primes.push(i);
    //         }
            
    //     }
        
    //     return n <= 2 ? 0 : primes.length;
        if (n <= 2) {
            return 0;
        }
        
        // Eratosthenes' sieve - fill sieve upto but not including n
        // if sieve[i] ends up true, it is a prime
        const sieve = Array(n).fill(true);
        sieve[0] = false;
        sieve[1] = false;
        
        let count = 0;
        for (let i = 0; ; i++) {
            // advance to next `true` value in the sieve
            while (i < sieve.length && sieve[i] === false) {
                i++;
            }
            
            if (i < sieve.length) {
                count++;
            } else {
                break;
            }
            
            // mark all multiples false
            for (let j = 2*i; j < sieve.length; j += i) {
                sieve[j] = false;
            }
            
        }
        
        return count;
        
    };