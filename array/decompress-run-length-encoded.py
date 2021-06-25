# https://leetcode.com/problems/decompress-run-length-encoded-list/
# tags - array
class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        # decompressed = []
        # i = 0
        # while i+1 < len(nums):
        #     decompressed.extend([nums[i+1]] * nums[i])
        #     i += 2
        # return decompressed
        
        decompressed = []
        for frequency, value in zip(nums[::2], nums[1::2]):
            decompressed.extend([value] * frequency)
        return decompressed