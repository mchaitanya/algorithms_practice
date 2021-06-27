# https://leetcode.com/problems/shuffle-string/
# tags - string
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        chars = list(s)
        for i, j in zip(range(len(s)), indices):
            chars[j] = s[i]
        return ''.join(chars)