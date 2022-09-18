/** @format */

//Given a string and a pattern, find out if the string contains any permutation of the pattern.

const if_string_contains_permutation_of_pattern = (str, pattern) => {
  const k = pattern.length
  let windowStart = 0
  let matched = 0
  let frequencyMap = {}

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0
    }
    frequencyMap[char] += 1
  }

  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (rightChar in frequencyMap) {
      frequencyMap[rightChar] -= 1
      if (frequencyMap[rightChar] === 0) {
        matched += 1
      }
    }

    if (matched === Object.keys(frequencyMap).length) {
      return true
    }

    if (windowEnd - windowStart + 1 > pattern.length - 1) {
      const leftChar = str[windowStart]
      windowStart += 1
      if (leftChar in frequencyMap) {
        if (frequencyMap[leftChar] === 0) {
          matched -= 1
        }
        frequencyMap[leftChar] += 1
      }
    }
  }
  return false
}

console.log(if_string_contains_permutation_of_pattern('bcdyaxbcd', 'bcdyabcdx'))
console.log(if_string_contains_permutation_of_pattern('bbyccxadd', 'bcdyabcdx'))
console.log(if_string_contains_permutation_of_pattern('odicf', 'dc'))
console.log(if_string_contains_permutation_of_pattern('oidbcaf', 'abc'))
console.log(if_string_contains_permutation_of_pattern('aaacb', 'abc'))
