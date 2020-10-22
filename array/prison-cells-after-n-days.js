// https://leetcode.com/problems/prison-cells-after-n-days/
// tags - arrays
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    // we are told that there are 8 cells 
    const NUM_CELLS = 8;
    // TRY - with bitmask
    function _convertStateToInt(state) {
        const binaryStr = state.join('');
        return parseInt(binaryStr, 2);
    }
    
    function _printPrison(state) {
        let prison = '';
        for (let cell of state) {
            prison += (cell + ' ');
        }
        console.log(prison);
    }
    
    // detect when a cycle occurs
    // total combinations = 2^8 = 256 - so at some point the state starts to repeat itself
    const daySeen = Array(2**NUM_CELLS).fill(undefined);
    const states = [];
    
    let day = 0;
    let state = cells;
    let cycleStart = 0, cycleEnd = 0;
    for (; day < N; day++) {
        const key = _convertStateToInt(state);
        if (daySeen[key] !== undefined) {
            cycleStart = daySeen[key];
            cycleEnd = day;
            break; // cycle detected
        } else {
            states.push(state);
            daySeen[key] = day;
        }
        
        let newState = Array(NUM_CELLS).fill(0);
        for (let i = 1; i < NUM_CELLS - 1; i++) {
            if ((state[i-1] === 1 && state[i+1] == 1) || (state[i-1] === 0 && state[i+1] === 0)) {
                newState[i] = 1;
            }
        }
        
        state = newState;
    }
    
    if (day === N) {
        return state;
    } else {
        // we detected a cycle & exited early
        // console.log('day = ' + day);
        // for (let i = 0; i < states.length; i++) {
        //     _printPrison(states[i]);
        // }
        
        return states[cycleStart + (N - cycleStart) % (cycleEnd - cycleStart)];
        
    }
    
};