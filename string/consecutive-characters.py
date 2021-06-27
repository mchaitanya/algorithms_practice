# https://leetcode.com/problems/consecutive-characters/
# tags - string
class Solution:
    def maxPower(self, s: str) -> int:
        power = 0
        max_power = 0
        num_chars = len(s)
        for i in range(num_chars):
            power += 1
            if i+1 == num_chars or s[i+1] != s[i]:
                max_power = max(max_power, power)
                power = 0
        return max_power