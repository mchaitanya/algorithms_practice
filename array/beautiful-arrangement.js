// https://leetcode.com/problems/beautiful-arrangement/
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    // backtracking with pruning
    let numBeautiful = 0;
    const chosen = Array(n).fill(false);
    function _search(ix) {
        if (ix === n+1) {
            numBeautiful++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            // try the number i only if 
            // - it hasn't been chosen before
            // - choosing it at this index keeps the perm beautiful
            if (chosen[i-1] || (i % ix !== 0 && ix % i !== 0)) continue;

            chosen[i-1] = true;
            _search(ix+1);
            chosen[i-1] = false;
        }
    }
    
    _search(1);
    return numBeautiful;

    // // BRUTE FORCE
    // function _isBeautiful(perm) {
    //     for (let i = 1; i <= perm.length; i++) {
    //         if ((perm[i-1] % i !== 0) && (i % perm[i-1] !== 0)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    
    // function* _generatePermutations(n) {
    //     const perm = [];
    //     const chosen = Array(n).fill(false);
    //     // backtracking
    //     function* _generate() {
    //         if (perm.length === n) {
    //             yield [...perm];
    //         }
            
    //         for (let i = 1; i <= n; i++) {
    //             if (chosen[i-1]) continue;
    //             chosen[i-1] = true;
    //             perm.push(i);
    //             yield* _generate();
    //             perm.pop();
    //             chosen[i-1] = false;
    //         }
    //     }
    //     yield* _generate();
    // }
    
    // let numBeautiful = 0;
    // for (let perm of _generatePermutations(n)) {
    //     if (_isBeautiful(perm)) {
    //         numBeautiful++;
    //     }
    // }
    // return numBeautiful;
    
};