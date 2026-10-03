//move all zeros to the end.
//by using two pointer approach
//first we get the index where first zero is present 
//then iterate loop over j+1
//then swap arr[i] and arr[j] if arr[i] is not zero


function moveAllZero(arr) {
    let n = arr.length;
    let j = -1
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            j = i
            break
        }
    }
    for (let i = j + 1; i < n; i++) {
        if (arr[i] != 0) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            j++
        }
    }
    return arr
}
let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1]
console.log(moveAllZero(arr))
