# https://leetcode.com/problems/valid-perfect-square/
# tags - math, binary-search
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        # Apply binary search to find number that equals the given number when squared.
        low, high = 1, 2**16
        while low <= high:
            mid = (low + high)//2
            squared = mid*mid
            if squared < num:
                low = mid+1
            elif squared > num:
                high = mid-1
            else:
                return True
        return False