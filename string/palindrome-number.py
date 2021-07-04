# https://leetcode.com/problems/palindrome-number/
# tags - string, number
class Solution:
    def isPalindrome(self, x: int) -> bool:
        # num_str = str(x)
        # for left, right in zip(num_str, reversed(num_str)):
        #     if left != right:
        #         return False
        # return True
        
        # num_str = str(x)
        # for i in range(len(num_str) // 2):
        #     if num_str[i] != num_str[-i-1]:
        #         return False
        # return True
        
        if x < 0:
            return False
        
        # Extract the digits.
        # They'll be reversed but that doesn't matter.
        digits = []
        while x > 0:
            digits.append(x % 10)
            x //= 10
        
        # for i in range(len(digits) // 2):
        #     if digits[i] != digits[-i-1]:
        #         return False
        # return True
        
        i, j = 0, len(digits)-1
        while i < j:
            if digits[i] != digits[j]:
                return False
            i += 1
            j -= 1
        return True
        
        