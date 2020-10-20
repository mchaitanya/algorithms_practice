// https://leetcode.com/problems/prison-cells-after-n-days/
// tags - arrays
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    // we are told that there are 8 cells & really only the inner 6 cells change with time
    const NUM_CELLS = 8;
    function _convertStateToInt(state) {
        const binaryStr = state.slice(1, NUM_CELLS-1).join('');
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
    // total combination = 2^6 = 64 - so at some point the state starts to repeat itself
    const seen = Array(2**(NUM_CELLS-2)).fill(false);
    const states = [];
    
    let state = cells;
    let day = 0;
    for (; day < N; day++) {
        const key = _convertStateToInt(state);
        if (seen[key]) {
            break; // cycle detected
        } else if (state[0] === 0 && state[NUM_CELLS-1] === 0) {
            // both the cells at the end have turned vacant - this'll take at most one turn
            states.push(state);
            seen[key] = true;
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
        // we detected a cycle & exited early, let's say day = k at this point
        // states should be an array of size k or k-1
        console.log('day = ' + day);
        for (let i = 0; i < states.length; i++) {
            _printPrison(states[i]);
        }
        
        // states[i] is the state at the start of day i
        // so state after day i is states[i+1]
        if (states.length === day) {
            // both the cells are the end were vacant at the start
            return states[N+1 % day];
        } else {
            return states[N % day];
        }
        
    }
    
};