// https://leetcode.com/problems/perfect-squares/
// tags - dynamic-programming, graph
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // Compute squares <= n.
  const squares = [];
  for (let i = 1; ; i++) {
    const square = i * i;
    if (square > n) {
      break;
    } else if (square < n) {
      squares.push(square);
    } else {
      return 1;
    }
  }

  // Solve with recursion & memoization.
  // Stores minimum #squares required to sum to a given number.
  const memo = new Map(squares.map((sq) => [sq, 1]));
  (function recurse(num) {
    if (memo.has(num)) return memo.get(num);
    let minSquaresReq = num;
    for (const sq of squares) {
      if (num > sq) {
        minSquaresReq = Math.min(minSquaresReq, recurse(num - sq) + 1);
      }
    }
    memo.set(num, minSquaresReq);
    return minSquaresReq;
  })(n);
  return memo.get(n);

  // // Imagine a graph of intermediate sums. BFS over it.
  // let depth = 1;
  // let curr = [...squares];
  // const seen = new Set(curr);
  // while (true) {
  //     depth++;
  //     const next = [];
  //     for (const sum of curr) {
  //         for (const square of squares) {
  //             const nextSum = sum + square;
  //             if (nextSum === n) return depth;
  //             // If we've seen a sum before, we know a shorter way to reach it.
  //             if (!seen.has(nextSum)) {
  //                 seen.add(nextSum);
  //                 next.push(nextSum);
  //             }
  //         }
  //     }
  //     curr = next;
  // }
  // // Should not reach here. Every n is guaranteed a solution.
};
