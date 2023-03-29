// https://leetcode.com/problems/container-with-most-water/
// tags - array, two-pointer
// Two pointers from LC
let maxArea = 0;
for (let left = 0, right = height.length - 1; left < right; ) {
  if (height[left] < height[right]) {
    maxArea = Math.max(maxArea, height[left] * (right - left));
    left++;
  } else {
    maxArea = Math.max(maxArea, height[right] * (right - left));
    right--;
  }
}
return maxArea;

// let maxHeight = 0;
// for (let h of height) {
//     if (h > maxHeight) maxHeight = h;
// }

// let maxArea = 0;
// // Simulate filling water.
// for (let h = 1; h <= maxHeight; h++) {
//     // Scan from left & right.
//     let left = 0, right = height.length-1;
//     while (height[left] < h) left++;
//     while (height[right] < h) right--;
//     maxArea = Math.max(maxArea, h * (right-left))
// }
// return maxArea;

// // O(n^2)
// let max = 0;
// for (let i = 0; i < height.length; i++) {
//     for (let j = i+1; j < height.length; j++) {
//         max = Math.max(max, (j-i) * Math.min(height[i], height[j]));
//     }
// }
// return max;
