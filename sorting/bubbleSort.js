//push the largest element to the last by adjacent swapping
//To solve this problem steps are as follows:
//step 1:- outer loop is from 1 to n-1
//step 2:- inner loop is from 0 to n-1-i
//step 3:- check condition if arr[j]>arr[j+1] then swap them.
//step 4:- return that arr.

//best case:- O(N)
//average case:- O(N^2)
//worst case:- O(N^2)

function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i <= n - 1; i++) {
        let didSwap = 0
        for (let j = 0; j <= n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                didSwap = 1
            }
        }
        if (didSwap == 0) break;
    }
    return arr
}
let arr = [9, 46, 24, 20, 52, 13]
console.log(bubbleSort(arr))