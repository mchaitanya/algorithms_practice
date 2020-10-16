// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
// tags - dynamic-programming, recursion
/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    // solve recursively with memoization
    // 2-d memo array 
    const memo = Array(d+1);
    for (let dice = 0; dice < memo.length; dice++) {
        if (dice === 0) {
            memo[dice] = Array(target+1).fill(0); // base case 1
        } else {
            memo[dice] = Array(target+1).fill(undefined)
                .map((_, t) => {
                    if (t === 0) {
                        return 0;
                    } else if (t >= 1 && t <= f) { // base case 2
                        return 1;
                    } else {
                        return undefined;
                    }
                });
        }
    }
    
    let prod = 1;
    for (let i = 0; i < 9; i++) {
        prod *= 10;
    }
    const base = prod + 7;
    // console.log(base);
    // (a + b + c) % n = ((a%n) + (b%n) + (c%n)) % n
    
    (function _countRolls(d, target) {
        // // base cases
        // if (d === 0) {
        //     return 0;
        // } else if (d >= 1 && target >= 1 && target <= f) {
        //     return 1;
        // }
        
        // check the memo array
        if (memo[d][target] !== undefined) {
            return memo[d][target];
        }

        let numRolls = 0;
        // we can roll any number with this die
        for (let roll = 1; roll <= f; roll++) {
            if (target > roll) {
                numRolls += _countRolls(d-1, target - roll);
            }
        }

        memo[d][target] = (numRolls % base);
        return (numRolls % base);
        
    })(d, target);
    
    return memo[d][target];
    
};
