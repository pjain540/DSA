// 0
// 12
// 345
// 6789

function pattern6(n) {
    let num = 0
    for (let i = 0; i < n; i++) {
        let rows = ""
        for (let j = 0; j <= i; j++) {
            rows += num;
            num++
        }
        console.log(rows)
    }
}
pattern6(4)