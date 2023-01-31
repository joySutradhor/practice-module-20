// 1.  2 ar namota print kore dekao .

function count (input) {
    let mathArray = [];
    for (let i = 1; i <= 10; i++) {
        let result = i * input;
        mathArray.push(result);
    }
    return mathArray;
    
}
let result = count(5);
console.log(result);

