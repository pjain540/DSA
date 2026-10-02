//check if array is sorted or not
function checkArraySorted(arr, n) {

    for (let i = 1; i < n; i++) {
        if (arr[i] >= arr[i - 1]) {
            continue
        } else {
            return false
        }
    }
    return true
}
let arr = [1, 3, 4, 2, 5]
console.log(checkArraySorted(arr, arr.length))