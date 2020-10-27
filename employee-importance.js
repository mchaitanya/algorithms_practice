// https://leetcode.com/problems/employee-importance/
// tags - hashtable, recursion
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = new Map();
    for (let e of employees) {
        map.set(e.id, e);
    }
    
    function _calculateImportance(id) {
        const employee = map.get(id);
        let importance = employee.importance;
        for (let sub of employee.subordinates) {
            importance += _calculateImportance(sub);
        }
        return importance;
    }
    
    return _calculateImportance(id);
};