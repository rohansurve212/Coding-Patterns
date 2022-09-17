/** @format */

//Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
//find the length of the longest substring having the same letters after replacement.

const length_longest_substring_after_replacement = (str, k) => {
  let windowStart = 0
  let maxLength = 0
  let maxRepeatLetterCount = 0
  let frequencyMap = {}

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0
    }
    frequencyMap[rightChar] += 1

    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    )

    // current window size is from windowStart to windowEnd, overall we have a letter
    // which is repeating 'maxRepeatLetterCount' times, this means we can have a window
    // which has one letter repeating 'maxRepeatLetterCount' times and the remaining
    // letters we should replace. If the remaining letters are more than 'k', it is the
    // time to shrink the window as we are not allowed to replace more than 'k' letters
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = str[windowStart]
      frequencyMap[leftChar] -= 1
      windowStart += 1
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

console.log(length_longest_substring_after_replacement('aabccbb', 2))
console.log(length_longest_substring_after_replacement('abbcb', 1))
console.log(length_longest_substring_after_replacement('abccde', 1))
