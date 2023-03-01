// https://leetcode.com/problems/parallel-courses/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  const al = new Array(n).fill(0).map(() => []);
  const numPrereqs = new Array(n).fill(0);
  for (const [p, c] of relations) {
    al[p - 1].push(c - 1);
    numPrereqs[c - 1]++;
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    if (numPrereqs[i] === 0) queue.push(i);
  }

  let numLeft = n;
  let numSemesters = 0;
  while (queue.length > 0) {
    numSemesters++;
    numLeft -= queue.length;
    const next = [];
    for (const c of queue) {
      for (const cn of al[c]) {
        numPrereqs[cn]--;
        if (numPrereqs[cn] === 0) next.push(cn);
      }
    }
    queue = next;
  }
  return numLeft > 0 ? -1 : numSemesters;
};
