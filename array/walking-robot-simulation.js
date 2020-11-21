/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    // commands
    const LEFT = -2, RIGHT = -1;
    // map each dir to a number
    const N = 0, E = 1, S = 2, W = 3;
    
    // preprocess the obstacles
    const set = new Set();
    for (let [xo, yo] of obstacles) {
        set.add(xo + ',' + yo);
    }
    
    function _getNextPosition(curr, dir, steps) {
        let [xe, ye] = curr;
        // console.log(xe, ye);
        for (let i = 0; i < steps; i++) {
            if (dir === N) {
                if (set.has(xe + ',' + (ye+1))) break;
                ye += 1;
            } else if (dir === E) {
                if (set.has((xe+1) + ',' + ye)) break;
                xe += 1;
            } else if (dir === S) {
                if (set.has(xe + ',' + (ye-1))) break;
                ye -= 1;
            } else {
                if (set.has((xe-1) + ',' + ye)) break;
                xe -= 1;
            }
            // console.log(xe, ye);
        }
        return [xe, ye];
        
    }
    
    let dir = N;
    let position = [0,0];
    let result = 0;
    for (let command of commands) {
        if (command === LEFT) {
            dir = (dir === N ? W : dir-1);
        } else if (command === RIGHT) {
            dir = (dir === W ? N : dir+1);
        } else {
            position = _getNextPosition(position, dir, command);
            result = Math.max(result, position[0]**2 + position[1]**2);
        }
        // console.log(command, dir, position);
    }
    
    return result;
    
};