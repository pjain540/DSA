//left rotate an array by one position
//first we take an element at 0th index and store it in a variable
//then traverse loop from 1 to n
//and then store arr[i-1] = arr[i]
//and last put the temp variaable at arr[n-1]

function leftRotate(arr) {
    let n = arr.length
    let temp = arr[0]
    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i]
    }
    arr[n - 1] = temp
}
let arr = [1, 2, 3, 4, 5]
leftRotate(arr)
console.log(arr)
