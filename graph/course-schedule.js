// https://leetcode.com/problems/course-schedule/
// graph, bfs
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const al = new Array(numCourses).fill(0).map(() => []);
  const numPrereqs = new Array(numCourses).fill(0);
  for (const [c, p] of prerequisites) {
    al[p].push(c);
    numPrereqs[c]++;
  }

  let numFinished = 0;
  const queue = numPrereqs.map((v, i) => i).filter((i) => numPrereqs[i] === 0);
  while (queue.length > 0) {
    numFinished++;
    const c = queue.shift();
    for (const cn of al[c]) {
      numPrereqs[cn]--;
      if (numPrereqs[cn] === 0) queue.push(cn);
    }
  }
  return numFinished === numCourses;

  // const numPrereqs = Array(numCourses).fill(0);
  // // find all nodes that have no incoming edges
  // // construct a DAG to model the course connections
  // const al = Array(numCourses).fill(0).map(_ => []);
  // for (const [course, prereq] of prerequisites) {
  //     // there is an edge from prereq to course
  //     al[prereq].push(course);
  //     numPrereqs[course]++;
  // }
  // // console.log(noPrereqs);
  // // console.log(al);
  // // do bfs - on each check if there any new courses whose prerequisites have reached zero
  // let courses = numPrereqs.reduce((zeroPrereqs, count, c) => count === 0 ? zeroPrereqs.concat(c) : zeroPrereqs, []);
  // while (courses.length > 0) {
  //     let nextCourses = [];
  //     for (let c of courses) {
  //         for (let n of al[c]) {
  //             if (numPrereqs[n] > 0) {
  //                 numPrereqs[n]--;
  //                 if (numPrereqs[n] === 0) {
  //                     nextCourses.push(n);
  //                 }
  //             }
  //         }
  //     }
  //     courses = nextCourses;
  // }
  // // returns true if all courses can be reached
  // return numPrereqs.every(c => c === 0);
};
