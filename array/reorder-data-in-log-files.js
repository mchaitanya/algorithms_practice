// https://leetcode.com/problems/reorder-data-in-log-files/
// tags - array, string
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const digitLogs = [];
    for (let log of logs) {
        let [id, first] = log.split(' ');
        if (isNaN(Number(first))) {
            letterLogs.push(log);
        } else {
            digitLogs.push(log);
        }
    }
    
    letterLogs.sort((log1, log2) => {
        const space1 = log1.indexOf(' ');
        const key1 = log1.slice(space1 + 1) + log1.slice(0, space1);
        const space2 = log2.indexOf(' ');
        const key2 = log2.slice(space2 + 1) + log2.slice(0, space2);
        return key1.localeCompare(key2);
    });
    // console.log(letterLogs);
    
    return [...letterLogs, ...digitLogs];
    
};