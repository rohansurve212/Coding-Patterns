/** @format */

const containsDuplicate = (nums) => {
  const mapper = new Map()

  for (let num of nums) {
    if (mapper.get(num)) {
      return true
    } else {
      mapper.set(num, 1)
    }
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7]))
