// A
// AB
// ABC
// ABCD

function pattern8(n) {

    for (let i = 1; i <= n; i++) {
        let rows = ""
        let charCode = 65
        for (let j = 1; j <= i; j++) {
            rows += String.fromCharCode(charCode)
            charCode++
        }
        console.log(rows)
    }
}
pattern8(5)