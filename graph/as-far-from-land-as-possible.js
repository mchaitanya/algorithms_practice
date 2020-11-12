// https://leetcode.com/problems/as-far-from-land-as-possible/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const rcount = grid.length;
    const ccount = grid[0].length;
    const WATER = 0, LAND = 1;
    
    function _getId(r, c) {
        return r*ccount + c;
    }
    
    function _getNeighbours(r, c) {
        // 4-directional neighbours
        // return [[-1,0], [0,1], [1,0], [0,-1]]
        //         .map(([dr, dc]) => [r+dr, c+dc])
        //         .filter(([r, c]) => r >= 0 && r < rcount && c >= 0 && c < ccount);
        
        const offsets = [[-1,0], [0,1], [1,0], [0,-1]];
        const neighbours = [];
        for (const [dr, dc] of offsets) {
            const rnew = r+dr, cnew = c+dc;
            if (rnew >= 0 && rnew < rcount && cnew >= 0 && cnew < ccount) {
                neighbours.push([rnew, cnew]);
            }
        }
        return neighbours;
    }
    
//     function _findDistanceToNearestLand(r, c) {
//         // do bfs out from this cell
//         let depth = 0;
//         let level = [[r,c]];
//         const seen = new Set([_getId(r, c)])
//         while (level.length > 0) {
//             depth++;
//             const nextLevel = [];
//             for (let [rl, cl] of level) {
//                 for (let [rn, cn] of _getNeighbours(rl, cl)) {
//                     let id = _getId(rn, cn);
//                     if (seen.has(id)) continue;
                    
//                     seen.add(id);
//                     if (grid[rn][cn] === LAND) {
//                         return depth;
//                     } else {
//                         nextLevel.push([rn, cn]);
//                     }
//                 }
//             }
//             level = nextLevel;
//         }
//         return -1;
//     }
    
//     let max = -1;
//     for (let r = 0; r < rcount; r++) {
//         for (let c = 0; c < ccount; c++) {
//             if (grid[r][c] === WATER) {
//                 let dist = _findDistanceToNearestLand(r, c);
//                 if (dist === -1) { // there is no land
//                     return -1;
//                 }
                
//                 if (dist > max) {
//                     max = dist;
//                 }
//             }
//         }
//     }
//     return max;
    
    // from the LeetCode hint - start BFS from all land cells at the same time
    
    // const landCells = grid.reduce((cells, row, r) => {
    //     return row.reduce((arr, cell, c) => cell === WATER ? arr : arr.concat([[r, c]]), cells);
    // }, []);
    
    // let level = landCells;
    
    
//     let level = [];
//     for (let r = 0; r < rcount; r++) {
//         for (let c = 0; c < ccount; c++) {
//             if (grid[r][c] === LAND) {
//                 level.push([r, c]);
//             }
//         }
//     }
    
//     let max = -1;
//     let depth = 0;
//     let seen = new Set();
//     while (level.length > 0) {
//         depth++;
//         const nextLevel = [];
//         for (let [rl, cl] of level) {
//             seen.add(rl*ccount + cl);
//             for (let [rn, cn] of _getNeighbours(rl, cl)) {
//                 let id = rn*rcount + cn;
//                 if (grid[rn][cn] === LAND || seen.has(id)) {
//                     continue;
//                 }
                
//                 seen.add(id);
//                 nextLevel.push([rn, cn]);
//                 if (grid[rn][cn] === WATER) {
//                     max = depth;
//                 }
//             }
//         }
//         level = nextLevel;
//     }
//     return max;
    
    let queue = [];
    for (let r = 0; r < rcount; r++) {
        for (let c = 0; c < ccount; c++) {
            if (grid[r][c] === LAND) {
                queue.push([r, c]);
            }
        }
    }
    queue.push(null); // level marker
    
    let max = -1;
    let depth = 1;
    let seen = new Set();
    while (queue.length > 0) {
        const cell = queue.shift();
        if (cell == null) {
            depth++;
            if (queue.length === 0) {
                break;
            } else {
                queue.push(null);
                continue;
            }
        }
        
        const [rq, cq] = cell;
        seen.add(rq*ccount + cq);
        for (let [rn, cn] of _getNeighbours(rq, cq)) {
            let id = rn*rcount + cn;
            if (grid[rn][cn] === LAND || seen.has(id)) {
                continue;
            }

            seen.add(id);
            queue.push([rn, cn]);
            max = depth;
        }
        
    }
    return max;
    
};