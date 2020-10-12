// https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/
// tags - array, greedy
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxNumberOfApples = function(arr) {
    // sort the apples by weight
    arr.sort((n1, n2) => n1-n2);
    // console.log(arr);
    
    let count = 0;
    let totalWeight = 0;
    for (let weight of arr) {
        totalWeight += weight;
        if (totalWeight > 5000) {
            return count;
        }
        count++;
    }
    return count;
    
};