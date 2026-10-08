//majority element which should be greater than n/2
//the element which is greater than n/2

//by hashing for better solution
//time complexity is O(n)
//space complexity is O(n)
function majorityElement(arr) {
    let n = arr.length
    let seen = {}
    for (let i = 0; i < n; i++) {
        if (seen[arr[i]] != undefined) {
            seen[arr[i]] += 1
        } else {
            seen[arr[i]] = 1
        }
        if (seen[arr[i]] > n / 2) {
            return arr[i]
        }
    }
    return -1
}

let arr = [1, 2, 1, 1, 3, 1]
console.log(majorityElement(arr))

//for optimal solution we will use Moore's Voting Algorithm
//intitution behind this algorithm is that someone which does not cancelled and appear more than n/2 times
//steps for solving this problem is:
//1. declare two variables such as count and element and assign 0.
//2. if count is 0 then increment count and make element = current element
//3. if element is equal to current element then increment count 
//4. else if element is not equal to current element then decrement count
//5. return element

function majorityElementOptimize(arr) {
    let n = arr.length
    let count = 0
    let element = -1
    for (let i = 0; i < n; i++) {
        if (count == 0) {
            count += 1
            element = arr[i]
        }
        else if (element == arr[i]) {
            count += 1
        }
        else {
            count -= 1
        }
    }
    return element
}
let arr1 = [1, 2, 1, 1, 3, 1]
console.log(majorityElementOptimize(arr1))