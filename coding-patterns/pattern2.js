// *****
// ****
// ***
// **
// *

function pattern2(n) {
    for (let i = 1; i <= n; i++) {
        let rows = ""
        for (let j = n; j >= i; j--) {
            rows += "*"
        }
        console.log(rows)
    }
}
pattern2(5)