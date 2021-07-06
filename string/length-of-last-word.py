# https://leetcode.com/problems/length-of-last-word/
# tags - string
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s)-1
        end = start = -1
        while i >= 0 and (end == -1 or start == -1):
            if s[i] != ' ' and (i+1 == len(s) or s[i+1] == ' '):
                end = i
            if s[i] != ' ' and (i-1 < 0 or s[i-1] == ' '):
                start = i
            i -= 1
        return 0 if end == -1 else end-start+1
                