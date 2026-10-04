//longest subarray with sum of k
//by using two pointer approach
//time complexity of worst case is O(2n)
//space complexity is O(1)

function longestSubArrayWithK(arr, k) {
    let left = 0
    let right = 0
    let sum = arr[0]
    let maxLength = 0
    let n = arr.length
    while (right < n) {
        while (left <= right && sum > k) {
            sum -= sum[left]
            left += 1
        }
        if (sum == k) {
            maxLength = Math.max(maxLength, right - left + 1)
        }
        right += 1
        if (right < n) {
            sum += arr[right]
        }
    }
    return maxLength
}
let arr = [1, 2, 3, 1, 1, 1, 1, 3, 3]
let k = 6
console.log(longestSubArrayWithK(arr, k))