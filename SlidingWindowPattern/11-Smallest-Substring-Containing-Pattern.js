/** @format */

const smallest_substring_containing_pattern = (str, pattern) => {
  let windowStart = 0
  let matched = 0
  let frequencyMap = {}
  let substrStart = 0
  let minLength = str.length + 1

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0
    }
    frequencyMap[char] += 1
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (rightChar in frequencyMap) {
      frequencyMap[rightChar] -= 1
      if (frequencyMap[rightChar] >= 0) {
        // Count every matching of a character
        matched += 1
      }
    }

    //Shrink the window if we can, finish as soon as we remove a matched character
    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1
        substrStart = windowStart
      }

      const leftChar = str[windowStart]
      windowStart += 1
      if (leftChar in frequencyMap) {
        // Note that we could have redundant matching characters, therefore we'll
        // decrement the matched count only when a useful occurrence of a matched
        // character is going out of the window
        if (frequencyMap[leftChar] === 0) {
          matched -= 1
        }
        frequencyMap[leftChar] += 1
      }
    }
  }
  if (minLength > str.length) {
    return ''
  }
  return str.substring(substrStart, substrStart + minLength)
}

console.log(smallest_substring_containing_pattern('aabdec', 'abc'))
console.log(smallest_substring_containing_pattern('aabdec', 'abac'))
console.log(smallest_substring_containing_pattern('abdbca', 'abc'))
console.log(smallest_substring_containing_pattern('adcad', 'abc'))
