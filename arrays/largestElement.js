//largest element of an array

function largestElement(arr) {
    let n = arr.length;
    let largest = arr[0]
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
let arr = [3, 5, 1, 6, 9]
console.log(largestElement(arr))