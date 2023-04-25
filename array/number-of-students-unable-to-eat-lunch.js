// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// tags - array
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const n = students.length;
  const CIRCULAR = 0,
    SQUARE = 1;

  let numSquare = 0,
    numCircular = 0;
  for (const pref of students) {
    if (pref === CIRCULAR) {
      numCircular++;
    } else {
      numSquare++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (sandwiches[i] === CIRCULAR) {
      if (numCircular === 0) return n - i;
      numCircular--;
    } else {
      if (numSquare === 0) return n - i;
      numSquare--;
    }
  }

  return 0;

  // const n = students.length;
  // // i is the index into students & j is the index into sandwiches.
  // for (let i = 0, j = 0, seen = 0; j < n; i = (i+1) % n) {
  //     seen++;
  //     if (students[i] === sandwiches[j]) {
  //         students[i] = -1; // Set the value to -1 to indicate the student left the queue.
  //         seen = 0;
  //         j++;
  //     } else if (seen === n) {
  //         // Looped around the array but didn't find a student that wants the top sandwich.
  //         return n - j;
  //     }
  // }
  // return 0;
};
