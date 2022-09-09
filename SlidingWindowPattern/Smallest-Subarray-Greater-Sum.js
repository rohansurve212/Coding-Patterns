/** @format */

//Given an array of positive numbers and a positive number ‘S,’
//find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
//Return 0 if no such subarray exists.

//There is one difference though: in this problem, the sliding window size is not fixed.

const smallest_subarray_sum_greater_than_S = (S, arr) => {
  let windowSum = 0.0
  let smallestWindowSize = Infinity
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]

    //Shrink the window as small as possible until the window_sum is smaller than 's'
    while (windowSum >= S) {
      smallestWindowSize = Math.min(
        smallestWindowSize,
        windowEnd - windowStart + 1
      )
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
  return smallestWindowSize
}

console.log(
  `Smallest subarray length: ` +
    smallest_subarray_sum_greater_than_S(7, [2, 1, 5, 2, 3, 2])
)
console.log(
  `Smallest subarray length: ` +
    smallest_subarray_sum_greater_than_S(7, [2, 1, 5, 2, 8])
)
console.log(
  `Smallest subarray length: ` +
    smallest_subarray_sum_greater_than_S(8, [3, 4, 1, 1, 6])
)
