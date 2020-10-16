// https://leetcode.com/problems/top-k-frequent-words/
// tags - heap, sorting
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const countMap = new Map();
    for (let word of words) {
        let count = countMap.get(word) || 0;
        countMap.set(word, count+1);
    }
    
    let entries = Array.from(countMap.entries());
    // sort the entries
    entries.sort((e1, e2) => {
        if (e2[1] === e1[1]) {
            return e1[0].localeCompare(e2[0]);
        } else {
            return e2[1] - e1[1];
        }
    });
    
    // console.log(entries);
    
    return entries.slice(0,k).map(e => e[0]);
    
};