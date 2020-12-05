// https://leetcode.com/problems/can-place-flowers/
// tags - array
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const EMPTY = 0, FILLED = 1;
    if (n === 0) return true;
    
    // try to find a place for each flower
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === FILLED) continue;
        
        let isPreviousEmpty = (i === 0 || flowerbed[i-1] === EMPTY);
        let isNextEmpty = (i === flowerbed.length-1 || flowerbed[i+1] === EMPTY);
        if (isPreviousEmpty && isNextEmpty) {
            n--;
            flowerbed[i] = FILLED;
            if (n === 0) {
                return true;
            }
        }
        
    }
    
    return false;
    
};