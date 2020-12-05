// https://leetcode.com/problems/odd-even-jump/
// tags - array
/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
    // simulate the process
    function _canReachEnd(start) {
        let jump = 1;
        let i = start;
        while (i < A.length - 1) {
            let next = undefined;
            for (let j = i+1; j < A.length; j++) {
                // odd jump
                if (jump % 2 === 1 && A[j] >= A[i] && (next == undefined || A[j] < A[next])) {
                    next = j;
                }
                // even jump
                if (jump % 2 === 0 && A[j] <= A[i] && (next == undefined || A[j] > A[next])) {
                    next = j;
                }
            }
            
            if (next == undefined) {
                return false;
            }
            
            i = next;
            jump++;
        }
        
        return true;
        
    }
    
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (_canReachEnd(i)) {
            count++;
        }
    }
    return count;
    
};