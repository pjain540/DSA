//quick sort
//this works on the divide and conquer
//pick a pivot and place it in a correct place.
//smaller numbers should be at the left and larger number should be at right

function quickSort(arr, low, high) {
    if (low < high) {
        let pivot = partition(arr, low, high)
        quickSort(arr, low, pivot - 1)
        quickSort(arr, pivot + 1, high)
    }
}

function partition(arr, low, high) {
    let pivot = arr[low]
    let i = low
    let j = high
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--
        }
        if (i < j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    let temp = arr[low]
    arr[low] = arr[j]
    arr[j] = temp
    return j
}
let arr = [4, 6, 2, 5, 7, 9, 1, 3]
quickSort(arr, 0, arr.length - 1)
console.log(arr)