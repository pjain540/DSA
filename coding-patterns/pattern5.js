// 1
// 12
// 123
// 1234

function pattern5(n) {
    for (let i = 1; i <= n; i++) {
        let rows = ""
        for (let j = 1; j <= i; j++) {
            rows += j;
        }
        console.log(rows)
    }
}

pattern5(4)