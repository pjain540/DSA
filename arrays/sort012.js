//sort of 0, 1, 2 by using three pointer approach
//to solve this problem we use three pointer approach low, mid, high
//1. if arr of mid is 0 then swap low and mid and increase low and mid.
//2. if arr of mid is 1 then increase mid
//3. if arr of mid is 2 then swap mid and high and decrease high

function sort012(arr) {
    let n = arr.length
    let low = 0
    let mid = 0
    let high = n - 1
    while (mid <= high) {
        if (arr[mid] == 0) {
            let temp = arr[low]
            arr[low] = arr[mid]
            arr[mid] = temp
            low++
            mid++
        }
        else if (arr[mid] == 1) {
            mid++
        }
        else {
            let temp = arr[mid]
            arr[mid] = arr[high]
            arr[high] = temp
            high--
        }
    }
}
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0]
sort012(arr)
console.log(arr)