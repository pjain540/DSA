//missing number in a series of n numbers
//we have multiple ways but the optimal way is to use the sum formula 
//Sum of first n numbers is n*(n+1)/2
//Sum of given array = sum of first n numbers - missing number
//missing number = sum of first n numbers - sum of given array

function missingNumber(arr, n) {
    let sumOfN = n * (n + 1) / 2
    let sumOfArr = 0
    for (let i = 0; i < arr.length; i++) {
        sumOfArr += arr[i]
    }
    return sumOfN - sumOfArr
}
let arr = [1, 2, 4, 5]
let n = 5
console.log(missingNumber(arr, n))