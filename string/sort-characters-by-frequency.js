// https://leetcode.com/problems/sort-characters-by-frequency/
// tags - string
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // count the occurrences of each character
    const map = new Map();
    for (let c of s) {
        let count = map.get(c) || 0;
        map.set(c, count+1);
    }
    
    return Array.from(map.entries())
        .sort((e1, e2) => e2[1] - e1[1]) // sort in decreasing order by frequency
        .reduce((str, e) => str + e[0].repeat(e[1]), '') // construct the sorted string
    
};