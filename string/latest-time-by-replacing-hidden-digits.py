# https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
# tags - string
class Solution:
    def maximumTime(self, time: str) -> str:
        result = []
        for i, c in enumerate(time):
            if c != '?':
                char = c
            elif i == 0:
                char = '2' if time[i+1] in {'?', '0', '1', '2', '3'} else '1'
            elif i == 1:
                char = '3' if time[i-1] in {'?', '2'} else '9'
            elif i == 3:
                char = '5'
            elif i == 4:
                char = '9'
            result.append(char)
        return ''.join(result)
        
            