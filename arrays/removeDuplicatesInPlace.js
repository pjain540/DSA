// remove duplicates in place from sorted array
//by using two pointers approach
//as we keep two poiters i and j, i will be at 0th index and j iterate from  1, 
//when we get that arr[i] and arr[j] is not equal then assign arr[j to arr[i+1]

function removeInPlaceDuplicate(arr, n) {
    let i = 0

    for (let j = 1; j < n; j++) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j]
            i++
        }
    }
    // return i+1
    return arr.splice(0, i + 1)
}
let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
console.log(removeInPlaceDuplicate(arr, arr.length))
