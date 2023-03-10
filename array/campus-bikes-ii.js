// https://leetcode.com/problems/campus-bikes-ii/
// tags - backtracking
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  // Greedy strategy?
  // - Take each worker, assign nearest bike to him. NO - Example 1: worker1 will be given bike0
  // BFS from all the workers
  // - NO - Multiple bikes can be assigned to the same worker.

  // // Try all assignments with backtracking. Pick the one with the minimum distance sum.
  // let minDistanceSum = Infinity;
  // const assigned = new Array(bikes.length).fill(false);
  // // w - Current worker
  // function assign(w, distanceSum) {
  //     if (distanceSum > minDistanceSum) return;
  //     if (w === workers.length) {
  //         minDistanceSum = Math.min(minDistanceSum, distanceSum);
  //         return;
  //     }

  //     for (let b = 0; b < bikes.length; b++) {
  //         if (!assigned[b]) {
  //             assigned[b] = true;
  //             const distance = Math.abs(workers[w][0] - bikes[b][0]) + Math.abs(workers[w][1] - bikes[b][1]);
  //             assign(w+1, distanceSum + distance);
  //             assigned[b] = false;
  //         }
  //     }
  // }

  // assign(0, 0);

  // return minDistanceSum;

  // DP with a string mask
  // Return the minimum distance sum from worker w on, given which bikes have already been assigned.
  const memo = new Map();
  function dp(w, assigned) {
    if (w === workers.length) return 0;
    if (memo.has(assigned)) return memo.get(assigned);

    let minDistanceSum = Infinity;
    const arr = assigned.split(""); // Convert to an array so it's easy to create a new mask.
    for (let b = 0; b < bikes.length; b++) {
      if (arr[b] === "0") {
        arr[b] = "1";
        const distance =
          Math.abs(workers[w][0] - bikes[b][0]) +
          Math.abs(workers[w][1] - bikes[b][1]);
        minDistanceSum = Math.min(
          minDistanceSum,
          distance + dp(w + 1, arr.join(""))
        );
        arr[b] = "0";
      }
    }

    memo.set(assigned, minDistanceSum);
    return minDistanceSum;
  }

  return dp(0, "0".repeat(bikes.length));
};
