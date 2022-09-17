/** @format */

const non_repeat_substring = (str) => {
  let windowStart = 0
  let maxLength = 0
  let charIndexMap = {}

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]

    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
    }
    charIndexMap[rightChar] = windowEnd

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

console.log(
  `Length of the longest substring: ${non_repeat_substring('aabccbb')}`
)
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`)
console.log(
  `Length of the longest substring: ${non_repeat_substring('abccde')}`
)
