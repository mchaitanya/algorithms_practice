// https://leetcode.com/problems/snapshot-array/
// tags - array
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  // this.arr = new Array(length).fill(0);
  // // Store just the diffs.
  // this.snapshots = [];
  // this.diff = new Map();

  // From LC - Use a list of lists. Add both the val & the snap id to each index.
  this.arr = new Array(length).fill(0).map(() => []);
  this.nextSnapId = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  // this.arr[index] = val;
  // this.diff.set(index, val);

  const vals = this.arr[index];
  if (vals.length > 0 && vals[vals.length - 1][1] === this.nextSnapId) {
    vals[vals.length - 1][0] = val;
  } else {
    vals.push([val, this.nextSnapId]);
  }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  // this.snapshots.push(this.diff);
  // this.diff = new Map();
  // return this.snapshots.length-1;

  this.nextSnapId++;
  return this.nextSnapId - 1;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  // while (snap_id >= 0) {
  //     const diff = this.snapshots[snap_id];
  //     if (diff.has(index)) {
  //         return diff.get(index);
  //     }
  //     snap_id--;
  // }
  // return 0; // Initially each element equals 0.

  const vals = this.arr[index];
  // // Linear scan
  // for (let i = vals.length-1; i >= 0; i--) {
  //     if (vals[i][1] <= snap_id && (i === vals.length-1 || vals[i+1][1] > snap_id)) {
  //         return vals[i][0];
  //     }
  // }
  // return 0;

  // Binary search
  let left = 0,
    right = vals.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const [val, id] = vals[mid];
    if (id === snap_id) {
      return val;
    } else if (id > snap_id) {
      right = mid - 1; // Search the left half
    } else {
      // id < snap_id
      left = mid + 1; // Search the right half.
    }
  }
  return left === 0 ? 0 : vals[left - 1][0];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
