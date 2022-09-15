/** @format */

//Here, we are asked to find the average of all subarrays of ‘5’ contiguous elements in the given array.

const find_maxSum_of_subarrays_size_k = (K, arr) => {
  let maxSum = 0.0
  let windowSum = 0.0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] //add the next element

    //slide the window, no need to slide if we've not hit the window size of 'K'
    if (windowEnd >= K - 1) {
      maxSum = Math.max(maxSum, windowSum) //calculate the maximum sum
      windowSum -= arr[windowStart] //subtract the element going out
      windowStart += 1 //slide the window ahead
    }
  }
  return maxSum
}

console.log(
  `Maximum sum of a subarray of size K: ${find_maxSum_of_subarrays_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
)
console.log(
  `Maximum sum of a subarray of size K: ${find_maxSum_of_subarrays_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
)
