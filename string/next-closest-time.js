// https://leetcode.com/problems/next-closest-time/
// tags - string
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function (time) {
  const MINS_DAY = 24 * 60;
  // Generate permutations of valid times. Check how close it is to the given time.
  const [hh, mm] = time.split(":").map(Number);
  const minsRef = hh * 60 + mm;

  const digits = Array.from(time.replace(":", "")).map(Number);

  let closestDistance = Infinity;
  let closestTime;

  function build(i, arr) {
    if (arr.length === 4) {
      const hours = arr[0] * 10 + arr[1];
      const minutes = arr[2] * 10 + arr[3];
      const nextMinsRef = hours * 60 + minutes;
      let distance =
        nextMinsRef > minsRef
          ? nextMinsRef - minsRef
          : MINS_DAY - (minsRef - nextMinsRef);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestTime =
          String(hours).padStart(2, "0") +
          ":" +
          String(minutes).padStart(2, "0");
      }
      return;
    }

    for (const d of digits) {
      if (i === 0 && d > 2) continue;
      if (i === 1 && arr[0] === 2 && d > 3) continue;
      if (i === 2 && d > 5) continue;

      arr.push(d);
      build(i + 1, arr);
      // Backtrack.
      arr.pop();
    }
  }

  build(0, []);

  return closestTime;

  // const set = new Set(time);
  // function increment(timeStr) {
  //     let [hh, mm] = timeStr.split(':').map(Number);
  //     mm += 1;
  //     if (mm === 60) {
  //         mm = 0;
  //         hh += 1;
  //         if (hh === 24) {
  //             hh = 0;
  //         }
  //     }
  //     return String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
  // }

  // function canBeFormed(timeStr) {
  //     for (const c of timeStr) {
  //         if (!set.has(c)) return false;
  //     }
  //     return true;
  // }

  // do {
  //     time = increment(time);
  // } while (!canBeFormed(time));

  // return time;
};
