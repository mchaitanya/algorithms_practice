// https://leetcode.com/problems/word-ladder/
// tags - tree, bfs
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // convert word list into a set - easier to check membership then
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    
    let numWordsEncountered = 1;
    let candidates = [beginWord];
    let seen = new Set([beginWord]);
    while (candidates.length > 0) {
        numWordsEncountered++;
        let nextCandidates = [];
        for (let candidate of candidates) {
            for (let i = 0; i < candidate.length; i++) {
                // iterate over each lowercase alphabetic character
                for (let j = 0; j < 26; j++) {
                    const char = String.fromCharCode('a'.charCodeAt(0) + j);
                    if (candidate[i] === char) {
                        continue;
                    }
                    
                    const transformed = candidate.slice(0,i) + char + candidate.slice(i+1);
                    if (transformed === endWord) {
                        return numWordsEncountered;
                    } else if (!seen.has(transformed) && wordSet.has(transformed)) {
                        nextCandidates.push(transformed);
                        seen.add(transformed);
                    }
                    
                }
            }
        }
        
        candidates = nextCandidates;
    }
    
    return 0;
    
};

// slip-ups:
// - endWord may not even be in dictionary
//  - fix: check this case right at the start
// - can get trapped in cycles, example hot -> dot -> hot -> dot etc.
//  - fix: maintain a set of seen words; if it's already been seen, no point exploring this path further


