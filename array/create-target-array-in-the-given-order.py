# https://leetcode.com/problems/create-target-array-in-the-given-order/
# tags - array
class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        target = []
        for i, n in zip(index, nums):
            target.insert(i, n)
        return target