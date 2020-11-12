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
        return [[-1,0], [0,1], [1,0], [0,-1]]
                .map(([dr, dc]) => [r+dr, c+dc])
                .filter(([r, c]) => r >= 0 && r < rcount && c >= 0 && c < ccount);
    }
    
    function _findDistanceToNearestLand(r, c) {
        // do bfs out from this cell
        let depth = 0;
        let level = [[r,c]];
        const seen = new Set([_getId(r, c)])
        while (level.length > 0) {
            depth++;
            const nextLevel = [];
            for (let [rl, cl] of level) {
                for (let [rn, cn] of _getNeighbours(rl, cl)) {
                    let id = _getId(rn, cn);
                    if (seen.has(id)) continue;
                    
                    seen.add(id);
                    if (grid[rn][cn] === LAND) {
                        return depth;
                    } else {
                        nextLevel.push([rn, cn]);
                    }
                }
            }
            level = nextLevel;
        }
        return -1;
    }
    
    let max = -1;
    for (let r = 0; r < rcount; r++) {
        for (let c = 0; c < ccount; c++) {
            if (grid[r][c] === WATER) {
                let dist = _findDistanceToNearestLand(r, c);
                if (dist === -1) { // there is no land
                    return -1;
                }
                
                if (dist > max) {
                    max = dist;
                }
            }
        }
    }
    
    return max;
    
};