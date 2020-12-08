// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
// tags - array, math
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // // brute force - O(n^2) - enumerate & check each pair
    // let count = 0;
    // for (let i = 0; i < time.length; i++) {
    //     for (let j = i+1; j < time.length; j++) {
    //         if ((time[i] + time[j]) % 60 === 0) {
    //             count++;
    //         }
    //     }
    // }
    // return count;
    
    
    // exploit the identity: (a+b) %n = (a%n + b%n) % n
    // each index from 0 ... 59 is a remainder we can get on dividing by 60
    const mods = Array(60).fill(0);
    for (let t of time) {
        mods[t%60]++;
    }
    
    function _nchoose2(n) {
        return n*(n-1) / 2;
    }
    
    // start out with pairs where 
    // each time is either divisible by 30/60 on its own
    
    // THIS ASSUMES WE CAN ONLY USE A TIME ONCE - THAT'S NOT THE CASE
    // let count = Math.floor(mods[0]/2) + Math.floor(mods[30]/2);
    let count = _nchoose2(mods[0]) + _nchoose2(mods[30]);
    for (let i = 1, j = 59; i < j; i++, j--) {
        // count += Math.min(mods[i], mods[j]);
        count += (mods[i] * mods[j]);
    }
    
    return count;
    
};