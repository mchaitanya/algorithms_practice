// https://leetcode.com/problems/course-schedule-ii/
// tags - graph
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // model courses as a graph, run toposort
    const numPrereqs = Array(numCourses).fill(0);
    const al = Array(numCourses).fill(0).map(_ => []);
    for (let [c, p] of prerequisites) {
        al[p].push(c);
        numPrereqs[c]++;
    }
    
    // do BFS - Kahn's algorithm
    const order = [];
    let level = Array(numCourses).fill(0).map((_, i) => i).filter(c => numPrereqs[c] === 0);
    while (level.length > 0) {
        order.push(...level);
        const nextLevel = [];
        for (let p of level) {
            for (let c of al[p]) {
                numPrereqs[c]--;
                if (numPrereqs[c] === 0) {
                    nextLevel.push(c);
                }
            }
        }
        level = nextLevel;
    }
    
    return numPrereqs.some(p => p > 0) ? [] : order;
    
};