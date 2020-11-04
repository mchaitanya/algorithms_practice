// https://leetcode.com/problems/next-closest-time/
// tags - string
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    // str guaranteed to be in HH:MM format
    let [hours, mins] = time.split(':').map(v => Number(v));
    function _increment([hours, mins]) {
        if (mins == 59) {
            mins = 0;
            hours = (hours+1) % 24;
        } else {
            mins++;
        }
        return [hours, mins];
    }
    
    const digits = new Set(time.split(''));
    function _isValid(str) {
        for (let char of str) {
            if (!digits.has(char)) {
                return false;
            }
        }
        return true;
    }
    
    while (true) {
        [hours, mins] = _increment([hours, mins]);
        const timeStr = String(hours).padStart(2,'0') + ':' + String(mins).padStart(2,'0');
        if (_isValid(timeStr)) {
            return timeStr;
        }
    }
    
};