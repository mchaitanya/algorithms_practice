# https://leetcode.com/problems/slowest-key/
# tags - string, array
class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        max_duration = releaseTimes[0]
        longest_pressed_key = keysPressed[0]
        i = 1 # We are given that at least two keys were pressed.
        while i < len(keysPressed):
            duration = releaseTimes[i] - releaseTimes[i-1]
            if duration > max_duration:
                max_duration = duration
                longest_pressed_key = keysPressed[i]
            elif duration == max_duration and keysPressed[i] > longest_pressed_key:
                longest_pressed_key = keysPressed[i]
            i += 1
        return longest_pressed_key