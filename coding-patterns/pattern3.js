//     *
//    **
//   ***
//  ****
// *****

function pattern3(n) {
    for (let i = 1; i <= n; i++) {
        let rows = ""
        for (let j = 1; j <= n - i; j++) {
            rows += " "
        }
        for (let k = 1; k <= i; k++) {
            rows += "*"
        }
        console.log(rows)
    }
}
pattern3(5)
