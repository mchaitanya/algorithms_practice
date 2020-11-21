// https://leetcode.com/problems/exclusive-time-of-functions/
// tags - string, stack
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    // {function_id}:{'start'|'end'}:{timestamp}
    const START = 'start', END = 'end';
    
    const stack = [];
    function _getTop() {
        return stack[stack.length - 1];
    }
    
    function _parse(log) {
        const [id, action, time] = log.split(':');
        return [
            Number(id), // convert to number, used as index into array
            action, 
            Number(time) // 
        ];
    }
    
    // time on stack - start of the time unit
    // if it says 2, then start of time unit 2
    
    const times = Array(n).fill(0);
    for (let log of logs) {
        const [id, action, time] = _parse(log);
        if (action === START) {
            // push on the stack
            const top = _getTop();
            if (top != null) {
                let [topId, topTime] = top;
                times[topId] += (time - topTime);
            }
            stack.push([id, time]);
            
        } else {
            // must be END; pop off stack
            const [poppedId, poppedTime] = stack.pop();
            times[poppedId] += (time - poppedTime + 1);
            const top = _getTop();
            if (top != null) {
                top[1] = time+1; // record time this function rose to the top of the stack
            }
        }
        // console.log(times);
        // console.log(stack);
    }
    
    return times;
    
};