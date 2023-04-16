// https://leetcode.com/problems/sender-with-largest-word-count/
// tags - string
/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
  function countWords(message) {
    let numSpaces = 0;
    for (const char of message) {
      if (char === " ") numSpaces++;
    }
    return numSpaces + 1;
  }

  // Store the word counts for each sender.
  const map = new Map();
  for (let i = 0; i < messages.length; i++) {
    const count = map.get(senders[i]) || 0;
    map.set(senders[i], count + countWords(messages[i]));
  }

  let maxCount = 0,
    maxSender;
  for (const [sender, count] of map.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxSender = sender;
    } else if (count === maxCount && maxSender < sender) {
      // Note: 'A' < 'a' => true but 'A'.localeCompare('a') => 1
      maxSender = sender;
    }
  }
  return maxSender;
};
