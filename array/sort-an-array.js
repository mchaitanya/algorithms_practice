// https://leetcode.com/problems/sort-an-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // bubble sort - swaps consecutive elements O(n^2)
    // inversion - pair of elements that are in wrong order
    // each swap removes at most one inversion
    function _bubbleSort(nums) {
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j+1 < n-i; j++) {
                if (nums[j] > nums[j+1]) {
                    [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                }
            }
            // after k rounds, the k-largest elements will be in the correct positions
        }
    }
    
    // merge sort
    function _mergeSort(nums) {
        if (nums.length <= 1) {
            return nums;
        }
        
        // length >= 2
        const mid = Math.floor(nums.length/2);
        const left = _mergeSort(nums.slice(0,mid));
        const right = _mergeSort(nums.slice(mid));
        
        // merge both halves
        const sorted = [];
        let i = 0, j = 0;
        while (i < left.length || j < right.length) {
            if (j === right.length || (i < left.length && left[i] <= right[j])) {
                sorted.push(left[i]);
                i++;
            } else if (i === left.length || (j < right.length && right[j] <= left[i])) {
                sorted.push(right[j]);
                j++;
            }
        }
        return sorted;
        
    }
    
    function _countingSort(nums) {
        // we are given that -50000 <= nums[i] <= 50000
        const positiveCounts = Array(50001).fill(0);
        const negativeCounts = Array(50001).fill(0);
        for (let num of nums) {
            if (num >= 0) {
                positiveCounts[num]++;
            } else {
                negativeCounts[-num]++;
            }
        }
        
        const result = Array(nums.length);
        let j = 0; // next index to insert at in result
        function _insert(num, count) {
            while (count > 0) {
                result[j] = num;
                count--;
                j++;
            }
        }
        
        for (let i = negativeCounts.length-1; i >= 0; i--) {
            _insert(-i, negativeCounts[i]);
        }
        
        for (let i = 0; i < positiveCounts.length; i++) {
            _insert(i, positiveCounts[i]);
        }
        
        return result;
    }
    
    return _countingSort(nums);
    
};