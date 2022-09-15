/** @format */

const fruits_into_baskets = (arr_of_fruitTrees, num_of_baskets) => {
  let windowStart = 0
  let maxLength = 0
  let fruitFrequency = {}

  //Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < arr_of_fruitTrees; windowEnd++) {
    const rightFruitTree = arr_of_fruitTrees[windowEnd]
    if (!(rightFruitTree in fruitFrequency)) {
      fruitFrequency[rightFruitTree] = 0
    }
    fruitFrequency[rightFruitTree] += 1

    //Shrink the sliding window , until we are left with 'num_of_baskets' fruits in the fruit frequency HashMap
    while (Object.keys(fruitFrequency) > num_of_baskets) {
      const leftFruitTree = arr_of_fruitTrees[windowStart]
      fruitFrequency[leftFruitTree] -= 1
      if ((fruitFrequency[leftFruitTree] = 0)) {
        delete fruitFrequency[leftFruitTree]
      }
      windowStart += 1 //Shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}
