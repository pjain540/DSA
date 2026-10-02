//find second largest and second smallest
//Its time complexitiy is O(n) and space complexitiy is O(1)

function secondSmallest(arr, n) {
    let smallest = arr[0]
    let secondSmallest = Infinity
    for (let i = 0; i < n; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        }
        else if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

function secondLargest(arr, n) {
    let largest = arr[0]
    let secondLargest = -1
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

function main() {
    let arr = [2, 3, 4, 5, 6, 7]
    let n = arr.length
    let sSmallest = secondSmallest(arr, n)
    let sSlargest = secondLargest(arr, n)
    console.log("Second Smallest : ", sSmallest)
    console.log("Second Largest : ", sSlargest)
}

main()