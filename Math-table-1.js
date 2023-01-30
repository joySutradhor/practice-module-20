// 1.  2 ar namota print kore dekao .

function count (input) {
    let mathTable =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
    for (let i = 0; i<mathTable.length; i++) {
        let values = mathTable[i];
        let result = values * input;
        console.log(result); 
    }
    
}
count(2);

// done
