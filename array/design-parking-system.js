// https://leetcode.com/problems/design-parking-system/
// tags - design
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.spaces = [big, medium, small];
  // this.spaces = new Map([
  //     [1, big],
  //     [2, medium],
  //     [3, small],
  // ]);
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.spaces[carType - 1] > 0) {
    this.spaces[carType - 1]--;
    return true;
  }
  return false;
  // const count = this.spaces.get(carType);
  // if (count === 0) return false;
  // this.spaces.set(carType, count-1);
  // return true;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
