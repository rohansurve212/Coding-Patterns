/** @format */

/*
Problem Statement
You are visiting a farm to collect fruits. The farm has a single row of fruit trees. 
You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.
*/

const fruits_into_baskets = (arr_of_fruitTrees, num_of_baskets) => {
  let windowStart = 0
  let maxLength = 0
  let fruitFrequency = {}

  //Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < arr_of_fruitTrees.length; windowEnd++) {
    const rightFruitTree = arr_of_fruitTrees[windowEnd]
    if (!(rightFruitTree in fruitFrequency)) {
      fruitFrequency[rightFruitTree] = 0
    }
    fruitFrequency[rightFruitTree] += 1

    //Shrink the sliding window , until we are left with 'num_of_baskets' fruits in the fruit frequency HashMap
    while (Object.keys(fruitFrequency).length > num_of_baskets) {
      const leftFruitTree = arr_of_fruitTrees[windowStart]
      fruitFrequency[leftFruitTree] -= 1
      if (fruitFrequency[leftFruitTree] === 0) {
        delete fruitFrequency[leftFruitTree]
      }
      windowStart += 1 //Shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

console.log(
  `Maximum number of fruits: ` +
    fruits_into_baskets(['A', 'B', 'C', 'A', 'C'], 2)
)

console.log(
  `Maximum number of fruits: ` +
    fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C', 'A'], 2)
)
