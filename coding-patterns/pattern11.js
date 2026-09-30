// 1
// 01
// 101
// 0101
// 10101

function pattern11(n) {
    for (let i = 1; i <= n; i++) {
        let rows = ""
        for (let j = 1; j <= i; j++) {
            if (i === 1 && j === 1) {
                rows += 1
            } else if (i % 2 === 0) {
                if (j % 2 === 0) {
                    rows += 1
                } else {
                    rows += 0
                }
            } else {
                if (j % 2 !== 0) {
                    rows += 1
                } else {
                    rows += 0
                }
            }
        }
        console.log(rows)
    }
}
pattern11(5)