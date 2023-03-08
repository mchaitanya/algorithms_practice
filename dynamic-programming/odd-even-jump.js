// https://leetcode.com/problems/odd-even-jump/
// tags - array
/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function (A) {
  const memo = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    memo[i] = [null, null]; // For oddJump = 0/1
  }

  // start - Current index
  // oddJump - 1 if next jump is odd-numbered, 0 otherwise
  function isGood(i, oddJump) {
    if (i >= arr.length) return false;
    if (i === arr.length - 1) return true;
    if (memo[i][oddJump] != null) return memo[i][oddJump];

    let min = Infinity,
      minIndex = null;
    let max = -Infinity,
      maxIndex = null;
    for (let j = i + 1; j < arr.length; j++) {
      // For an odd jump
      if (arr[i] <= arr[j] && arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
      // For an even jump
      if (arr[i] >= arr[j] && arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }

    let result = false;
    if (oddJump === 1 && minIndex != null) {
      result = isGood(minIndex, 0);
    } else if (oddJump === 0 && maxIndex != null) {
      result = isGood(maxIndex, 1);
    }

    memo[i][oddJump] = result;
    return result;
  }

  let numGood = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isGood(i, 1)) numGood++;
  }
  return numGood;

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
  //   // precalculate where you can jump to from any index
  //   const oddJumps = Array(A.length).fill(null);
  //   const evenJumps = Array(A.length).fill(null);
  //   for (let i = 0; i < A.length; i++) {
  //     for (let j = i + 1; j < A.length; j++) {
  //       // odd jump
  //       if (A[j] >= A[i] && (oddJumps[i] == null || A[j] < A[oddJumps[i]])) {
  //         oddJumps[i] = j;
  //       }
  //       // even jump
  //       if (A[j] <= A[i] && (evenJumps[i] == null || A[j] > A[evenJumps[i]])) {
  //         evenJumps[i] = j;
  //       }
  //     }
  //   }
  //   // simulate the process
  //   function _canReachEnd(start) {
  //     if (start === A.length - 1) {
  //       return true;
  //     }
  //     let jump = 1;
  //     let i = start;
  //     while (i != null && i < A.length - 1) {
  //       i = jump % 2 === 1 ? oddJumps[i] : evenJumps[i];
  //       jump++;
  //     }
  //     return i != null;
  //   }
  //   let count = 0;
  //   for (let i = 0; i < A.length; i++) {
  //     if (_canReachEnd(i)) {
  //       count++;
  //     }
  //   }
  //   return count;
};
