// https://leetcode.com/problems/minimum-index-sum-of-two-lists/
// tags - array, hash-table
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // map each of Andy's restaurants to their index
    const map = new Map();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    
    // now iterate over Doris' list
    let leastIndexSum = list1.length + list2.length;
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            const j = map.get(list2[i]);
            if (i+j < leastIndexSum) {
                leastIndexSum = i+j;
            }
            
        }
    }
    
    const restaurants = [];
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i]) && (i + map.get(list2[i]) === leastIndexSum)) {
            restaurants.push(list2[i]);
        }
    }
    return restaurants;
    
};