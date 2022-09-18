/** @format */

const all_anagrams_of_pattern_in_string = (str, pattern) => {
  let windowStart = 0
  let result = []
  let matched = 0
  let frequencyMap = {}

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
      if (frequencyMap[rightChar] === 0) {
        matched += 1
      }
    }

    if (matched === Object.keys(frequencyMap).length) {
      result.push(windowEnd - pattern.length + 1)
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
  return result
}

console.log(all_anagrams_of_pattern_in_string('ppqp', 'pq'))
console.log(all_anagrams_of_pattern_in_string('abbcabc', 'abc'))
