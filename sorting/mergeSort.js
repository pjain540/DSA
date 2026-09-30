//merge sort is an divide and merge
//As merge sort is works on divide and merge.
//Steps to achieve this:

//step 1:- First divide the array into two halves, first can be greater than second one and same vice versa
//step 2:- sort both the halves
//step 3:- merge both the sorted 

//-------------------------------------------------

//for doing this we need two functions, one for divide and second for merge!!

//the divide function is recursive and the merge function is iterative

//merge sort algo is like, we take two pointers one on left array and one on right array
//then compare and add

function mergeSort(arr, low, high) {
    if (low === high) {
        return
    }
    let mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)
    merge(arr, low, mid, high)
}

function merge(arr, low, mid, high) {
    let temp = []
    let left = low
    let right = mid + 1

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left])
            left++
        } else {
            temp.push(arr[right])
            right++
        }
    }
    while (left <= mid) {
        temp.push(arr[left])
        left++
    }
    while (right <= high) {
        temp.push(arr[right])
        right++
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low]
    }
}

let arr = [2, 1, 4, 5, 3]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)