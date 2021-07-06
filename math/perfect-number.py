# https://leetcode.com/problems/perfect-number/
# tags - number
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num == 1:
            return False
        
        # Start sum off at 1 because every number is divisible by 1.
        sum, div = 1, 2
        while True:
            squared = div*div
            if squared > num:
                break
            if num % div == 0:
                sum += div
                if squared < num:
                    sum += num//div
            div += 1
        return sum == num
                    
        