/** @format */

const twoSum = (nums, target) => {
  //Create an empty HashMap
  const indexMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    //add all the elements and their indices to the hashmap
    indexMap.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    const complementIndex = indexMap.get(target - nums[i])
    //check if the complement (target - nums[i]) is in the hashmap and has a different index
    if (indexMap.has(complement) && indexMap.get(complement) !== i) {
      return [i, complementIndex]
    }
  }
}

console.log(twoSum([3, 3], 6))
