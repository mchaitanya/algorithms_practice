// https://leetcode.com/problems/reward-top-k-students/
// tags - string
/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  positive_feedback = new Set(positive_feedback);
  negative_feedback = new Set(negative_feedback);

  // Map each student to their feedback points.
  const map = new Map();
  for (let i = 0; i < report.length; i++) {
    let points = map.get(student_id[i]) || 0;
    for (let word of report[i].split(" ")) {
      if (positive_feedback.has(word)) {
        points += 3;
      } else if (negative_feedback.has(word)) {
        points -= 1;
      }
    }
    map.set(student_id[i], points);
  }

  return student_id
    .sort((id1, id2) => {
      if (map.get(id1) === map.get(id2)) {
        return id1 - id2;
      } else {
        return map.get(id2) - map.get(id1);
      }
    })
    .slice(0, k);
};
