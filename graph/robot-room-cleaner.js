// https://leetcode.com/problems/robot-room-cleaner/
// tags - graph, backtracking
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  function moveBack() {
    robot.turnLeft();
    robot.turnLeft();
    robot.move();
    robot.turnLeft();
    robot.turnLeft();
  }

  const cleaned = new Set();
  // We must always face up before calling 'clean'.
  // Otherwise we won't assign the correct coordinates to the next cell.
  function clean(i, j) {
    if (cleaned.has(`${i},${j}`)) return;
    // Clean the current cell.
    robot.clean();
    cleaned.add(`${i},${j}`);
    // Try each direction & backtrack. First try moving up.
    if (robot.move()) {
      clean(i - 1, j);
      moveBack();
    }

    // Try left.
    robot.turnLeft();
    if (robot.move()) {
      robot.turnRight();
      clean(i, j - 1);
      robot.turnLeft();
      moveBack();
    }
    // Now we're facing left.

    // Try down.
    robot.turnLeft();
    if (robot.move()) {
      robot.turnRight();
      robot.turnRight();
      clean(i + 1, j);
      robot.turnLeft();
      robot.turnLeft();
      moveBack();
    }
    // Now we're facing down.

    // Try right.
    robot.turnLeft();
    if (robot.move()) {
      robot.turnLeft();
      clean(i, j + 1);
      robot.turnRight();
      moveBack();
    }
    // Now we're facing right. Face back up.
    // Otherwise our backtracking steps won't match up.
    robot.turnLeft();
  }
  clean(0, 0);
};
