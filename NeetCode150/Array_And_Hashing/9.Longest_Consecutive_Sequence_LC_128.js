/** @format */

const longestConsecutiveSequence = (nums) => {
  const numsSet = new Set(nums)
  let longest = 0

  for (const num of nums) {
    if (!numsSet.has(num - 1)) {
      let length = 0
      while (numsSet.has(num + length)) {
        length += 1
      }
      longest = Math.max(longest, length)
    }
  }

  return longest
}

console.log(
  longestConsecutiveSequence([1, 2, 3, 4, 4, 3, 2, 1, 5, 9, 8, 7, 100, 200, 6])
)
