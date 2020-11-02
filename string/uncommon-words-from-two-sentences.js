// https://leetcode.com/problems/uncommon-words-from-two-sentences/
// tags - string, hashtable
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const mapA = new Map();
    for (let w of A.split(' ')) {
        let count = mapA.get(w) || 0;
        mapA.set(w, count+1);
    }
    
    const mapB = new Map();
    for (let w of B.split(' ')) {
        let count = mapB.get(w) || 0;
        mapB.set(w, count+1);
    }
    
    
    const uncommon = [];
    for (let [w, count] of mapA.entries()) {
        if (count === 1 && !mapB.has(w)) {
            uncommon.push(w);
        }
    }
    
    for (let [w, count] of mapB.entries()) {
        if (count === 1 && !mapA.has(w)) {
            uncommon.push(w);
        }
    }
    
    return uncommon;
    
};