// *****
//  ****
//   ***
//    **
//     *

function pattern4(n) {
    for (let i = 1; i <= n; i++) {
        let rows = ""
        for (let j = 1; j <= i - 1; j++) {
            rows += " "
        }
        for (let k = 1; k <= n - i + 1; k++) {
            rows += "*"
        }
        console.log(rows)
    }
}
pattern4(5)
