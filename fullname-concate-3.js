// 3. fullName  name akta function declare korte hobe jar output hisabe full name dekabe ;

function fullName (fname , lname) {
    let concate = fname + lname ;
    console.log(concate);
}
fullName("joy " , "Sutradhor");



function count (input) {
    let mathTable =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
    for (let i = 0; i<mathTable.length; i++) {
        let values = mathTable[i];
        let result = values * input;
        console.log(result);      
    }
    
}
   count(2);