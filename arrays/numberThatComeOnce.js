//find the number that comes once and other numbers comes twice

function numberThatComeOnce(arr) {
    let seen = {}
    for (let i = 0; i < arr.length; i++) {
        seen[arr[i]] = (seen[arr[i]] || 0) + 1
    }
    for (let key in seen) {
        if (seen[key] == 1) {
            return key
        }
    }
}
let arr = [1, 2, 4, 4, 2, 5, 5]
console.log(numberThatComeOnce(arr))