// https://leetcode.com/problems/daily-temperatures/
// tags - stack
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // // Store the index where each temp occurs, scanning from the right.
  // const answer = new Array(temperatures.length).fill(0);
  // const positions = new Array(101).fill(null);
  // for (let i = temperatures.length-1; i >= 0; i--) {
  //     const temp = temperatures[i];
  //     // Search temp+1, ... 100 & find the first index where a higher temp occurs.
  //     let minPosition = null;
  //     for (let higher = temp+1; higher <= 100; higher++) {
  //         if (minPosition == null || (positions[higher] != null && positions[higher] < minPosition)) {
  //             minPosition = positions[higher];
  //         }
  //     }
  //     if (minPosition != null) answer[i] = minPosition - i;
  //     positions[temp] = i;
  // }
  // return answer;

  // Solve with a stack.
  const answer = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let j = 0; j < temperatures.length; j++) {
    // First pop all elements whose temp < curr temp.
    while (stack.length > 0) {
      const i = stack[stack.length - 1];
      if (temperatures[i] >= temperatures[j]) break;
      answer[i] = j - i;
      stack.pop();
    }
    // Then push the current index.
    stack.push(j);
  }
  return answer;

  // // Brute force - 2 pass
  // const answer = new Array(temperatures.length).fill(0);
  // for (let i = 0; i < temperatures.length; i++) {
  //     for (let j = i+1; j < temperatures.length; j++) {
  //         if (temperatures[j] > temperatures[i]) {
  //             answer[i] = j - i;
  //             break;
  //         }
  //     }
  // }
  // return answer;
};
