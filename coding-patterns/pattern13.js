//   1
//  121
// 12321

function pattern13(n) {
    for (let i = 1; i <= 3; i++) {
        let rows = ""
        for (let j = 1; j <= n - i; j++) {
            rows += " "
        }
        for (let k = 1; k <= i; k++) {
            rows += k
        }
        for (let l = i - 1; l >= 1; l--) {
            rows += l
        }
        console.log(rows)
    }
}
pattern13(3)