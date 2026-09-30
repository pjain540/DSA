// A
// BC
// DEF
// GHIJ
// KMNOP

function pattern7(n) {
    let charCode = 65
    for (let i = 1; i <= n; i++) {
        let rows = ""
        for (let j = 1; j <= i; j++) {
            rows += String.fromCharCode(charCode)
            charCode++
        }
        console.log(rows)
    }
}
pattern7(5)