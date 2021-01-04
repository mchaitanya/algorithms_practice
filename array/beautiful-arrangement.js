// https://leetcode.com/problems/beautiful-arrangement/
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    function _isBeautiful(perm) {
        for (let i = 1; i <= perm.length; i++) {
            if ((perm[i-1] % i !== 0) && (i % perm[i-1] !== 0)) {
                return false;
            }
        }
        return true;
    }
    
    function* _generatePermutations(n) {
        const perm = [];
        const chosen = Array(n).fill(false);
        // backtracking
        function* _generate() {
            if (perm.length === n) {
                yield [...perm];
            }
            
            for (let i = 1; i <= n; i++) {
                if (chosen[i-1]) continue;
                // 
                chosen[i-1] = true;
                perm.push(i);
                yield* _generate();
                perm.pop();
                chosen[i-1] = false;
            }
        }
        yield* _generate();
    }
    
    let numBeautiful = 0;
    for (let perm of _generatePermutations(n)) {
        if (_isBeautiful(perm)) {
            numBeautiful++;
        }
    }
    return numBeautiful;
    
};