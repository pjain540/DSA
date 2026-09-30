//checking duplicates in an array

function question2(arr) {
    let seen = {}
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return true
        } else {
            seen[arr[i]] = 1
        }
    }
    return false
}
// let arr = [1, 2, 2, 3, 3, 3]
let arr = [1, 2, 3, 4, 5]
console.log(question2(arr))

//time complexity: O(N)
//space complexity: O(N)
