// https://leetcode.com/problems/max-area-of-island/
// tags - graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // run dfs in the grid, keep track of size of each connected component
    const rcount = grid.length;
    const ccount = grid[0].length;
    const WATER = 0, LAND = 1;
    
    const seen = Array(rcount);
    for (let r = 0; r < rcount; r++) {
        seen[r] = Array(ccount).fill(false);
    }
    
    function _getNeighbours(r, c) {
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
    
    // function _findArea(r, c) {
    //     let area = 1;
    //     seen[r][c] = true;
    //     for (let [rn, cn] of _getNeighbours(r,c)) {
    //         if (grid[rn][cn] === LAND && !seen[rn][cn]) {
    //             area += _findArea(rn, cn);
    //         }
    //     }
    //     return area;
    // }
    
    function _findArea(r, c) {
        let area = 1;
        seen[r][c] = true;
        const queue = [[r,c]];
        while (queue.length > 0) {
            const [rq,cq] = queue.shift();
            for (let [rn,cn] of _getNeighbours(rq,cq)) {
                if (grid[rn][cn] === LAND && !seen[rn][cn]) {
                    area++;
                    seen[rn][cn] = true;
                    queue.push([rn, cn]);
                }
            }
        }
        return area;
    } 
    
    let maxArea = 0;
    for (let r = 0; r < rcount; r++) {
        for (let c = 0; c < ccount; c++) {
            if (grid[r][c] === LAND && !seen[r][c]) {
                maxArea = Math.max(maxArea, _findArea(r,c));
            }
        }
    }
    
    return maxArea;
    
};