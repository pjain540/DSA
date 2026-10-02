// remove duplicated from the sorted 

function duplicates(arr, n) {
    let seen = {}
    let duplicates = {}
    let unique = []
    for (let i = 0; i < n; i++) {
        if (seen[arr[i]]) {
            seen[arr[i]] += 1
            duplicates[arr[i]] = seen[arr[i]]
        } else {
            unique.push(arr[i])
            seen[arr[i]] = 1
        }
    }
    return duplicates, unique
}
let arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
console.log(duplicates(arr, arr.length))