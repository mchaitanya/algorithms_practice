// https://leetcode.com/problems/min-cost-climbing-stairs/
// tags - dynamic-programming
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // DP problem
    // state[i] = min cost to reach step i
    // = min(state[i-1] + cost(i-1), state[i-2] + cost(i-2));
    
    const state = Array(cost.length + 1).fill(0);
    state[0] = 0; // can start at step 1 free of cost
    state[1] = 0; // can start at step 2 ""
    for (let i = 2; i < state.length; i++) {
        state[i] = Math.min(state[i-1] + cost[i-1], state[i-2] + cost[i-2]);
    }
    
    return state[state.length-1];
    
};