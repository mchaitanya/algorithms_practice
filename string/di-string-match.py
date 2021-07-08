# https://leetcode.com/problems/di-string-match/
# tags - string
class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        perm = []
        left, right = 0, len(s)
        for char in s:
            if char == 'I':
                # Pick the smallest integer left.
                # It is guaranteed to be smaller than the next integer.
                perm.append(left)
                left += 1
            else:
                # Pick the largest integer left.
                perm.append(right)
                right -= 1
        perm.append(left)
        return perm
            