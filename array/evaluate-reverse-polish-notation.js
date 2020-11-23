// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// tags - array, stack
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // place operands on stack
    // when you see an operator, pop 2 operands off the stack, put the answer back on the stack
    function _eval(operator, left, right) {
        switch (operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                // should truncate towards 0
                let temp = left/right;
                return (temp > 0 ? Math.floor(temp) : Math.ceil(temp));
        }
    }
    
    // const operations = new Map();
    // operations.set('+', (x, y) => x + y);
    // operations.set('-', (x, y) => x - y);
    // operations.set('*', (x, y) => x * y);
    // operations.set('/', (x, y) => (x/y > 0 ? Math.floor(x/y) : Math.ceil(x/y)));
    
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    for (let token of tokens) {
        if (operators.has(token)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(_eval(token, operand1, operand2));
            // const fn = operations.get(token);
            // stack.push(fn(operand1, operand2));
        } else {
            stack.push(Number(token));
        }
        // console.log(stack);
    }
    
    // the final result will be left on top of the stack at the end
    return stack[stack.length-1];
    
};