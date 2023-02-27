// https://leetcode.com/problems/furthest-building-you-can-reach/
// tags - heap
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  let bricksReq = 0;
  // bricksSaved is the sum of the values in the heap. Use ladders for the largest diffs.
  // Each time we use a ladder, we can save the bricks we'd have otherwise used.
  let bricksSaved = 0;
  const heap = new Heap((p, c) => p <= c);
  for (let i = 1; i < heights.length; i++) {
    const diff = heights[i] - heights[i - 1];
    if (diff > 0) {
      bricksReq += diff;
      if (heap.vals.length < ladders) {
        heap.add(diff);
        bricksSaved += diff;
      } else if (diff > heap.vals[0]) {
        bricksSaved -= heap.remove();
        heap.add(diff);
        bricksSaved += diff;
      }
      if (bricksReq - bricksSaved > bricks) {
        return i - 1;
      }
    }
  }
  return heights.length - 1;

  // const diffs = new Array(heights.length).fill(0);
  // for (let i = 1; i < heights.length; i++) {
  //     diffs[i] = heights[i] - heights[i-1];
  // }

  // function canReach(i) {
  //     let bricksReq = 0;
  //     const heap = new Heap((p,c) => p <= c); // Min-heap
  //     for (let k = 1; k <= i; k++) {
  //         const diff = diffs[k];
  //         if (diff > 0) {
  //             bricksReq += diffs[k];
  //             if (heap.vals.length < ladders) {
  //                 heap.add(diff);
  //             } else if (diff > heap.vals[0]) {
  //                 heap.remove();
  //                 heap.add(diff);
  //             }
  //         }
  //     }
  //     // Use ladders for the largest diffs.
  //     for (const val of heap.vals) {
  //         bricksReq -= val;
  //     }
  //     // See if we have enough bricks.
  //     return bricks >= bricksReq;
  // }

  // // Binary search the solution space.
  // let furthest = 0;
  // let low = 1, high = heights.length-1;
  // while (low <= high) {
  //     const mid = Math.floor((low + high) / 2);
  //     if (canReach(mid)) { // Search the right half.
  //         furthest = mid;
  //         low = mid+1;
  //     } else { // Search the left half.
  //         high = mid-1;
  //     }
  // }
  // return furthest;

  // // Solve with recursion.
  // function furthest(start, numBricks, numLadders) {
  //     if (start === heights.length-1) {
  //         return start;
  //     } else if (heights[start+1] <= heights[start]) {
  //         return furthest(start+1, numBricks, numLadders);
  //     } else {
  //         let result = start;
  //         const numBricksReq = heights[start+1] - heights[start];
  //         if (numBricks > numBricksReq) {
  //             result = Math.max(result, furthest(start+1, numBricks-numBricksReq, numLadders));
  //         }
  //         if (numLadders > 0) {
  //             result = Math.max(result, furthest(start+1, numBricks, numLadders-1));
  //         }
  //         return result;
  //     }
  // }
  // return furthest(0, bricks, ladders);
};

class Heap {
  constructor(cmpFn) {
    this.vals = []; // Initialize the backing array.
    this.cmp = cmpFn; // Takes a parent & child value & returns a boolean based on their ordering relationship.
  }

  add(val) {
    this.vals.push(val); // Add the value at the end.
    this.bubble(this.vals.length - 1, "up"); // Fix the heap order.
  }

  remove() {
    const top = this.vals.shift(); // Remove the root.
    if (this.vals.length > 1) {
      this.vals.unshift(this.vals.pop()); // Replace the root with the right-most node on the last level.
      this.bubble(0, "down"); // Fix the heap order.
    }
    return top;
  }

  bubble(i, dir) {
    const pi = dir === "down" ? i : Math.floor((i - 1) / 2);
    if (pi < 0) return;
    const len = this.vals.length;
    const li = 2 * pi + 1,
      ri = 2 * pi + 2;
    if (li >= len) return;
    const pval = this.vals[pi],
      lval = this.vals[li],
      rval = this.vals[ri];
    if (!this.cmp(pval, lval) || (ri < len && !this.cmp(pval, rval))) {
      if (ri < len && this.cmp(rval, lval)) {
        this.swapThenBubble(pi, ri, dir);
      } else {
        this.swapThenBubble(pi, li, dir);
      }
    }
  }

  swapThenBubble(pi, ci, dir) {
    [this.vals[pi], this.vals[ci]] = [this.vals[ci], this.vals[pi]];
    const i = dir === "up" ? pi : ci;
    this.bubble(i, dir);
  }
}
