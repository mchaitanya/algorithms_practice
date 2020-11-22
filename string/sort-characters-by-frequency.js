/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // count the occurrences of each character
    let maxCount = 0;
    const map = new Map();
    for (let c of s) {
        let count = map.get(c) || 0;
        if (count+1 > maxCount) {
            maxCount = count+1;
        }
        map.set(c, count+1);
    }
    
    // return Array.from(map.entries())
    //     .sort((e1, e2) => e2[1] - e1[1]) // sort decreasing order by frequency
    //     .reduce((str, e) => str + e[0].repeat(e[1]), '') // build the sorted string
    
    // LeetCode approach 3 - multiset and bucket sort
    const buckets = Array(maxCount+1).fill(0).map(_ => []);
    for (let [char, count] of map.entries()) {
        buckets[count].push(char);
    }
    
    let sorted = '';
    for (let i = maxCount; i >= 0; i--) {
        for (let c of buckets[i]) {
            sorted += c.repeat(i);
        }
    }
    return sorted;
    
};