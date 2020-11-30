// https://leetcode.com/problems/largest-time-for-given-digits/
// tags - array, time
/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    // generate all permutations - 4! = 24; then iterate and find the maximum
    function _generatePermutations(arr) {
        // never call this with size < 2
        if (arr.length === 2) {
            return [arr, [arr[1], arr[0]]];
        }
        
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            let rest = arr.filter((_, ix) => ix !== i);
            for (let sub of _generatePermutations(rest)) {
                result.push([arr[i], ...sub]);
            }
        }
        return result;
    }
    
    
    let max = [];
    const permutations = _generatePermutations(arr);
    // console.log(permutations);
    for (let p of permutations) {
        const hh = Number(p[0] + '' + p[1]);
        const mm = Number(p[2] + '' + p[3]);
        if (hh < 24 && mm < 60) {
            if (max.length === 0 || hh > max[0] || (hh === max[0] && mm > max[1])) {
                max = [hh, mm];
            }
        }
    }
    
    if (max.length > 0) {
        return String(max[0]).padStart(2,'0') + ':' + String(max[1]).padStart(2,'0');
    }
    return '';
};