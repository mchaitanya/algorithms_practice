// https://leetcode.com/problems/gas-station/
// tags - array, greedy
function canCompleteCircuit(gas: number[], cost: number[]): number {
    // start searching from index 0
    for (let start = 0; start < gas.length; start++) {
        if (_canReturnToStart(start)) {
            return start;
        }
    }
    
    function _canReturnToStart(start: number) {
        for (let n = 0, i = start, g = 0; n < gas.length; n++, i = (i+1) % gas.length) {
            // add in gas at current station
            g += gas[i];
            if (g < cost[i]) {
                return false;
            }
            // deduct cost to reach next station
            g = g - cost[i];
            
        }
        return true;
    }
    
    return -1;
    
};