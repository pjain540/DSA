// Selection sort
//it requires to find min number and swap it with the first element and move on to the next element.

//To solve this selection sorting steps are as follow:
//step 1:- outer loop is run from 0 to n-2, because last element(single element) do not need to be sorted.
//step 2:- initialize mini variable to i.
//step 3:- inner loop is run from i to n-1, to find minimun element.
//step 4:- check condition that is arr[j] is less than arr[mini].
//step 5:- if condition get true then initialize j to mini.
//step 6:- after inner loop end , swap arr[i] and arr[mini]
//step 7:- return that arr.

function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i <= n - 2; i++) {
        let mini = i
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[j] < arr[mini]) {
                mini = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[mini]
        arr[mini] = temp
    }
    return arr
}
let arr = [13, 46, 24, 52, 20, 9]
console.log(selectionSort(arr))