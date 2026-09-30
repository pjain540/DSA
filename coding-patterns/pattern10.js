// 12345
// 1234
// 123
// 12
// 1

function pattern10(n) {
    for (let i = 1; i <= n; i++) {
        let rows = ""
        for (let j = 1; j <= n - i + 1; j++) {
            rows += j
        }
        console.log(rows)
    }
}
pattern10(5)