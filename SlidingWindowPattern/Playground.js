/** @format */
var maxProfit = function (prices) {
  const largest_diff_arr = []

  for (let i = 0; i < prices.length; i++) {
    const future_prices = prices.slice(i)
    const largest = future_prices.reduce((acc, val) => {
      acc = val > acc ? val : acc
      return acc
    }, -Infinity)
    largest_diff_arr.push(largest - prices[i])
  }

  const largestDiff = largest_diff_arr.reduce((acc, val) => {
    acc = val > acc ? val : acc
    return acc
  }, -Infinity)

  return largestDiff
}

var productExceptSelf = function (nums) {
  //   const product_all = nums.reduce((acc, val) => {
  //     acc = acc * val
  //     return acc
  //   }, nums[0])

  //   for (let i = 0; i < nums.length; i++) {
  //     return nums.map((num) => product_all / num)
  //   }
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const arr = nums.filter((x, ind) => ind !== i)
    const product_all = arr.reduce((acc, val) => {
      acc = acc * val
      return acc
    }, 1)
    result.push(product_all)
  }
  return result
}
