/** @format */

const groupAnagrams = (arr) => {
  const reorder = (arr) => {
    return arr
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
  }

  const reorderedArr = arr.map((str) => reorder(str))

  const map = new Map()

  for (let i = 0; i < reorderedArr.length; i++) {
    const str = reorderedArr[i]
    if (!map.has(str)) {
      map.set(str, [arr[i]])
    } else {
      const groupedAnagrams = map.get(str)
      map.set(str, [...groupedAnagrams, arr[i]])
    }
  }

  const finalArr = []

  for (const value of map.values()) {
    finalArr.push(value)
  }

  return finalArr
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'aet'])
