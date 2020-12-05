// https://leetcode.com/problems/odd-even-jump/
// tags - array
/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
    // // simulate the process
    // function _canReachEnd(start) {
    //     let jump = 1;
    //     let i = start;
    //     while (i < A.length - 1) {
    //         let next = undefined;
    //         for (let j = i+1; j < A.length; j++) {
    //             // odd jump
    //             if (jump % 2 === 1 && A[j] >= A[i] && (next == undefined || A[j] < A[next])) {
    //                 next = j;
    //             }
    //             // even jump
    //             if (jump % 2 === 0 && A[j] <= A[i] && (next == undefined || A[j] > A[next])) {
    //                 next = j;
    //             }
    //         }
            
    //         if (next == undefined) {
    //             return false;
    //         }
            
    //         i = next;
    //         jump++;
    //     }
        
    //     return true;
        
    // }

    // precalculate where you can jump to from any index
    const oddJumps = Array(A.length).fill(null);
    const evenJumps = Array(A.length).fill(null);
    for (let i = 0; i < A.length; i++) {
        for (let j = i+1; j < A.length; j++) {
            // odd jump
            if (A[j] >= A[i] && (oddJumps[i] == null || A[j] < A[oddJumps[i]])) {
                oddJumps[i] = j;
            } 
            // even jump
            if (A[j] <= A[i] && (evenJumps[i] == null || A[j] > A[evenJumps[i]])) {
                evenJumps[i] = j;
            }
        }
    }
    
    // simulate the process
    function _canReachEnd(start) {
        if (start === A.length-1) {
            return true;
        }
        
        let jump = 1;
        let i = start;
        while (i != null && i < A.length - 1) {
            i = (jump % 2 === 1 ? oddJumps[i] : evenJumps[i]);
            jump++;
        }
        return (i != null);
        
    }
    
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (_canReachEnd(i)) {
            count++;
        }
    }
    return count;
    
};