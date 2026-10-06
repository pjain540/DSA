//two sum array problem
//time and space complexity is O(n)

//solving by using hashmap(better solution)
function twoSum(arr, target) {
    let seen = {}
    for (let i = 0; i < arr.length; i++) {
        compliment = target - arr[i]
        if (seen[compliment] !== undefined) {
            return [seen[compliment], i]
        }
        seen[arr[i]] = i
    }
    return []

}
let arr = [2, 6, 5, 8, 11]
console.log(twoSum(arr, target = 14))

//solve using two pointer approach(optimal solution)
//for this we have to make the array sort first.
function twoSumm(arr, target) {
    let n = arr.length
    let left = 0
    let right = n - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum == target) {
            return [left, right]
        } else if (sum > target) {
            right -= 1
        } else {
            left += 1
        }
    }


}
let arrr = [2, 6, 5, 8, 11]
console.log(twoSumm(arrr, target = 14))