//   1
//  212
// 32123

function pattern14(n) {
    for (let i = 1; i <= n; i++) {
        let rows = ''
        for (let j = 1; j <= n - i; j++) {
            rows += " "
        }
        for (let k = i; k >= 1; k--) {
            rows += k
        }
        for (let l = 2; l <= i; l++) {
            rows += l
        }
        console.log(rows)
    }
}
pattern14(4)