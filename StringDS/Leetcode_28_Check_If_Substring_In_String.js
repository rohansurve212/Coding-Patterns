/** @format */

//28. Find the Index of the First Occurrence in a String

//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Brute-Force Technique
// Time Complexity - O(n*m) --> n = string length and m = substring length
// Space Complexity - O(1)
const strStr = (string, substring) => {
  //edge case: if substring is empty
  if (substring.length === '') return 0

  //check for a match
  for (let i = 0; i <= string.length - substring.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      // no match
      if (string[i + j] !== substring[j]) break
    }
    //if match return i
    if (j === substring.length) return i
  }
  return -1
}

// KMP Algorithm

const computeLpsArray = (pattern, m, lps) => {
  let len = 0
  let i = 0
  lps[0] = 0

  while (i < m) {
    if (pattern[len] === pattern[i]) {
      lps[i] = len + 1
      len += 1
      i += 1
    } else {
      if (len != 0) {
        len = lps[len - 1]
      } else {
        lps[i] = 0
        i += 1
      }
    }
  }
}

const strSTr_KMP = (text, pattern) => {
  const n = text.length
  const m = pattern.length
  const lps = Array(m).fill(0)

  computeLpsArray(pattern, m, lps)
  let i = 0
  let j = 0

  while (i < n) {
    if (text[i] === pattern[j]) {
      i += 1
      j += 1
    } else {
      if (j !== 0) {
        j = lps[j - 1]
      } else {
        i += 1
      }
    }
    if (j === m) {
      return i - j
    }
  }
}

console.log(strSTr_KMP('qwertyuiopasdfghjklzxcvbnm', 'sdf'))
