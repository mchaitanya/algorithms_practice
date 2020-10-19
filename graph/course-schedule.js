// https://leetcode.com/problems/course-schedule/
// graph, bfs
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const numPrereqs = Array(numCourses).fill(0);
    // find all nodes that have no incoming edges
    // construct a DAG to model the course connections
    const al = Array(numCourses).fill(0).map(_ => []);
    for (const [course, prereq] of prerequisites) {
        // there is an edge from prereq to course
        al[prereq].push(course);
        numPrereqs[course]++;
    }
    
    // console.log(noPrereqs);
    // console.log(al);
    
    // do bfs - on each check if there any new courses whose prerequisites have reached zero
    const finished = Array(numCourses).fill(false);
    let courses = numPrereqs.reduce((zeroPrereqs, count, c) => count === 0 ? zeroPrereqs.concat(c) : zeroPrereqs, []);
    while (courses.length > 0) {
        let nextCourses = [];
        for (let c of courses) {
            finished[c] = true;
            for (let n of al[c]) {
                if (finished[n] === false) {
                    numPrereqs[n]--;
                    if (numPrereqs[n] === 0) {
                        nextCourses.push(n);
                    }
                }
            }
        }
        
        courses = nextCourses;
        
    }
    
    // returns true if all courses can be reached
    return (finished.indexOf(false) === -1)
    
};