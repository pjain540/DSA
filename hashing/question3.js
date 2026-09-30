//Return duplicate elements in an array along with the frequency of each duplicate element.

function question3(arr) {
    let seen = {}
    let duplicate = {}
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            seen[arr[i]] += 1
            duplicate[arr[i]] = seen[arr[i]]
        } else {
            seen[arr[i]] = 1
        }
    }
    return duplicate
}
let arr = [1, 2, 3, 4, 2, 3]
console.log(question3(arr))

//time complexity: O(N)
//space complexity: O(N)