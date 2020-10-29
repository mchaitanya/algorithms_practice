// https://leetcode.com/problems/shortest-word-distance/
// tags - string
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let lastSeenWord1 = undefined, lastSeenWord2 = undefined;
    let distance = words.length; // can't be larger than this
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            lastSeenWord1 = i;
            if (lastSeenWord2 !== undefined && (lastSeenWord1 - lastSeenWord2 < distance)) {
                distance = lastSeenWord1 - lastSeenWord2;
            }
        } else if (words[i] === word2) {
            lastSeenWord2 = i;
            if (lastSeenWord1 !== undefined && (lastSeenWord2 - lastSeenWord1 < distance)) {
                distance = lastSeenWord2 - lastSeenWord1;
            }
        }
    }
    
    // guaranteed word1 & word2 are both in the list
    return distance;
    
};