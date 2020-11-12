// https://leetcode.com/problems/number-of-islands-ii/
// tags - graph
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    // create the grid - initially filled with water
    const WATER = 0;
    const grid = Array(m);
    for (let r = 0; r < m; r++) {
        grid[r] = Array(n).fill(WATER);
    }
    
    function _print(grid) {
        grid.map(row => row.join(' ')).forEach(line => console.log(line));
        console.log();
    }
    
    function _getNeighbours(r, c) {
        return [[-1,0], [0,1], [1,0], [0,-1]]
                .map(([dr, dc]) => [r+dr, c+dc])
                .filter(([r, c]) => r >= 0 && r < m && c >= 0 && c < n);
    }
    
    let id = 0;
    const islands = new Set();
    function _dfs(r, c) {
        grid[r][c] = id;
        for (const [rn, cn] of _getNeighbours(r, c)) {
            if (grid[rn][cn] !== WATER && grid[rn][cn] !== id) {
                islands.delete(grid[rn][cn]);
                grid[rn][cn] = id;
                _dfs(rn, cn);
            }
        }
    }
    
    function _addLand(r, c) {
        if (grid[r][c] !== WATER) {
            return;
        }
        
        // we're sure we're on a WATER cell
        id++; // relabel all the connected cells with this id
        islands.add(id);
        _dfs(r, c);
        
    }
    
    const counts = [];
    for (let [r, c] of positions) {
        _addLand(r,c);
        counts.push(islands.size);
        
        // _print(grid);
        
    }
    
    return counts;
    
};