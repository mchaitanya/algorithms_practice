# https://leetcode.com/problems/decompress-run-length-encoded-list/
# tags - array
class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        decompressed = []
        for i in range(0, len(nums), 2):
            decompressed.extend([nums[i+1]] * nums[i])
        return decompressed
        
        # decompressed = []
        # for frequency, value in zip(nums[::2], nums[1::2]):
        #     decompressed.extend([value] * frequency)
        # return decompressed