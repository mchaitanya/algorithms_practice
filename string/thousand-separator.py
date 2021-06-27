# https://leetcode.com/problems/thousand-separator/
# tags - string
class Solution:
    def thousandSeparator(self, n: int) -> str:
        chars = []
        for i, c in enumerate(reversed(str(n))):
            if (i != 0 and i % 3 == 0):
                chars.append('.')
            chars.append(c)
        return ''.join(reversed(chars))