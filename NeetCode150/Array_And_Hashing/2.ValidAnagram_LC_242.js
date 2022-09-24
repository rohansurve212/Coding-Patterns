/** @format */

// Solution 1 - Using Hash Maps [TC - O(n+m), SC - O(n+m)]
const validAnagram_1 = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  const sMap = new Map()
  const tMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!sMap.get(s[i])) {
      sMap.set(s[i], 0)
    }
    sMap.set(s[i], sMap.get(s[i]) + 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (!tMap.get(t[i])) {
      tMap.set(t[i], 0)
    }
    tMap.set(t[i], tMap.get(t[i]) + 1)
  }

  for (const char of sMap.keys()) {
    if (!tMap.has(char) || sMap.get(char) !== tMap.get(char)) {
      return false
    }
  }
  return true
}

// Solution 2 - First Sorting the strings and then comparing [TC - O(nlogn + mlogm), SC - O(n+m)]
const validAnagram_2 = (s, t) => {
  const reorder = (str) => {
    return str
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
  }
  return reorder(s) === reorder(t)
}

console.log(validAnagram_1('vishakha', 'kahsivah'))
console.log(validAnagram_2('vishakha', 'kahsivah'))
