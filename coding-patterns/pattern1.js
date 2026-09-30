// *
// **
// ***
// ****
// *****


function pattern1(n) {
    let rows = ""
    for (let i = 1; i <= n; i++) {
        // let rows = ""
        for (let j = 1; j < i + 1; j++) {
            rows += "*";
        }
        console.log(rows);
    }
}

pattern1(5)