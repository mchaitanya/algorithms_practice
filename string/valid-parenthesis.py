# https://leetcode.com/problems/valid-parentheses/
# tags - string
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closing = dict([(')', '('), ('}', '{'), (']', '[')])
        for bracket in s:
            if bracket in {'(', '{', '['}:
                stack.append(bracket)
            elif not stack or stack.pop() != closing[bracket]:
                return False
        return len(stack) == 0
                