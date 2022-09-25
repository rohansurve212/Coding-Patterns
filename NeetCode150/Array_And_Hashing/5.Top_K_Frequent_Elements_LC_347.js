/** @format */

const topKFrequentElements = (nums, k) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const count = map.get(nums[i]) || 0
    map.set(nums[i], count + 1)
  }

  const frequencyArr = []
  for (const [key, value] of map.entries()) {
    frequencyArr.push([key, value])
  }

  const sortedFrequencyArr = frequencyArr.sort((a, b) => b[1] - a[1])

  const result = []
  for (let i = 0; i < k; i++) {
    result[i] = sortedFrequencyArr[i][0]
  }

  return result
}

console.log(topKFrequentElements([2, 1, 1, 2, 2, 3, 3, 4, 5, 7, 7], 4))
