// https://leetcode.com/problems/fizz-buzz/
// tags - math
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // const grid = Array(4);
    // for (let i = 0; i < 4; i++) {
    //     grid[i] = Array(4).fill(0);
    // }
    // console.table(grid);
    
    function _getLabel(num) {
        let label = String(num);
        if (num % 15 === 0) {
            label = 'FizzBuzz';
        } else if (num % 3 === 0) {
            label = 'Fizz';
        } else if (num % 5 === 0) {
            label = 'Buzz';
        }
        
        console.count('_getLabel');
        console.log(label);
        return label;
    }
    
    const result = Array(n);
    for (let i = 1; i <= n; i++) {
        console.log(i);
        
        console.group('_getLabel');
        result[i-1] = _getLabel(i);
        console.groupEnd();
        
        // console.assert(false, 'test'); // doesn't output anything
        // console.assert(i % 3 !== 0, 'Fizz');
        // console.assert(i % 5 !== 0, 'Buzz');
        // console.assert(i % 3 === 0 || i % 5 === 0, {i});
        
    }
    
    return result;
    
};