//counting frequency of the numbers in an array.

function question1(arr) {
    let freq = {}
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]] += 1
        } else {
            freq[arr[i]] = 1
        }
    }
    return freq
}
let arr = [1, 2, 2, 3, 3, 3]
console.log(question1(arr))

//time complexity: O(N)
//space complexity: O(N)