// https://leetcode.com/problems/minimum-time-to-complete-trips/
// tags - binary-search
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  function canCompleteTrips(totalTime) {
    let numTrips = 0;
    for (let t of time) {
      numTrips += Math.floor(totalTime / t);
      if (numTrips >= totalTrips) return true;
    }
    return false;
  }

  const minTime = Math.min(...time);
  // Binary search the range of possible times.
  let low = 0,
    high = totalTrips * minTime; // Upper bound if only the fastest bus is used.
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canCompleteTrips(mid)) {
      high = mid - 1; // Search the left half.
    } else {
      low = mid + 1; // Search the right half.
    }
  }
  return high + 1; // high set to mid-1 from the last time canCompleteTrips returned true

  // // Let time = t. Solve the equation:
  // // t/time[0] + t/time[1] + .... >= totalTrips
  // let denominator = 1;
  // for (const t of time) {
  //     denominator *= t;
  // }

  // let numerator = 0;
  // for (const t of time) {
  //     numerator += (denominator/t);
  // }

  // let total = Math.ceil(totalTrips * denominator / numerator);
  // while (true) {
  //     let numTrips = 0;
  //     for (const t of time) {
  //         numTrips += Math.floor(total/t);
  //     }
  //     if (numTrips >= totalTrips) return total;
  //     total++;
  // }
};
