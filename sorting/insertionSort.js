//Take an element and places it in the correct position.
//To solve this problem steps are as follows:
//step 1:- outer loop is run from 0 to n-1
//step 2:- initialize j to i
//step 3:- while loop is run and check condition if arr[j-1]>arr[j] and j>0 then swap them and decrement j
//step 4:- return that arr.

//best case:- O(N)
//average case:- O(N^2)
//worst case:- O(N^2)

function insertionSort(arr) {
    let n = arr.length
    for (let i = 0; i <= n - 1; i++) {
        let j = i
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
            j--
        }
    }
    return arr
}
let arr = [9, 46, 24, 20, 52, 13]
console.log(insertionSort(arr))