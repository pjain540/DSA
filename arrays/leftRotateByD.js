//left rotate an array by d place
//by the very optimal approach we just have to reverse it in three steps
//reverse first d elements
//reverse rest of the elements
//reverse the whole array

//-----------------------------------

//for right traversal
//reverse whole array
//reverse d element
//reverse the rest of the element

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}

function leftRotateByD(arr, d) {
    let n = arr.length
    d = d % n
    reverse(arr, 0, d - 1)
    reverse(arr, d, n - 1)
    reverse(arr, 0, n - 1)

}
let arr = [1, 2, 3, 4, 5, 6]
let d = 4
leftRotateByD(arr, d)
console.log(arr)