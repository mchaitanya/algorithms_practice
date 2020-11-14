// https://leetcode.com/problems/number-of-islands/
// tags - graph
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rcount = grid.length;
    const ccount = grid[0].length;
    const LAND = '1', WATER  = '0';
    
    function _print(grid) {
        grid.map(row => row.join(' ')).forEach(line => console.log(line));
        console.log();
    }
    
    function _getNeighbours(r, c) {
        return [[-1,0], [0,1], [1,0], [0,-1]]
                .map(([dr, dc]) => [r+dr, c+dc])
                .filter(([r, c]) => r >= 0 && r < rcount && c >= 0 && c < ccount);
    }
    
    let count = 0;
    function _dfs(r, c) {
        grid[r][c] = count;
        for (const [rn, cn] of _getNeighbours(r,c)) {
            if (grid[rn][cn] === LAND) {
                _dfs(rn, cn);
            }
        }
    }
    
    function _bfs(r, c) {
        grid[r][c] = count;
        const queue = [[r,c]];
        while (queue.length > 0) {
            const [rq,cq] = queue.shift();
            for (const [rn, cn] of _getNeighbours(rq,cq)) {
                if (grid[rn][cn] === LAND) {
                    grid[rn][cn] = count;
                    queue.push([rn, cn]);
                }
            }
        }
    }
    
    // run bfs from each cell - labeling the ccs
    for (let r = 0; r < rcount; r++) {
        for (let c = 0; c < ccount; c++) {
            if (grid[r][c] !== LAND) {
                continue;
            }
            
            // if we're here, we're on an unseen land cell
            count++;
            // _dfs(r,c);
            _bfs(r,c);
            // _print(grid);
            
        }
    }
    
    return count;
    
};