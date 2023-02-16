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
var GetImportance = function (employees, id) {
  // Recursively calculate the given employee's importance.
  // Store the mapping from id to employee.
  const map = new Map();
  for (const employee of employees) {
    map.set(employee.id, employee);
  }

  function calculateImportance(id) {
    const employee = map.get(id);
    let importance = employee.importance;
    for (const sub of employee.subordinates) {
      importance += calculateImportance(sub);
    }
    return importance;
  }
  return calculateImportance(id);
};
