//find max consecutive one's in a binary array

function maxConsecutive(arr) {
    let count = 0
    let maxCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count += 1
            maxCount = Math.max(maxCount, count)
        } else {
            count = 0
        }
    }
    return maxCount
}
let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1]
console.log(maxConsecutive(arr))