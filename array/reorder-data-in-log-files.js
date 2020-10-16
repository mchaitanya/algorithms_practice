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
        const [id1, ...rest1] = log1.split(' ');
        const [id2, ...rest2] = log2.split(' ');
        return (rest1.join(' ') + id1).localeCompare(rest2.join(' ') + id2);
    });
    // console.log(letterLogs);
    
    return [...letterLogs, ...digitLogs];
    
};