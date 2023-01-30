// 1. akta function ar modde arekta function call korte hobe .
function innerFunction() {
    console.log("inner Function");
}
function mainFunction() {
    innerFunction();
    return "Main Function";
}
let show = mainFunction();
console.log(show);

// 2. tin ta variable nite hobe niye sob gula jug kore average ta return korte hobe
let number1 = 5;
let number2 = 9;
let number3 = 4;
let total = number1 + number2 + number3;
let result = makeAvg(total);

function makeAvg(total) {
    let avg = total / 3;
    console.log("The average result is : ", avg);
    return avg;
}


// 3. akta array ke parametar hisabe nite hobe abong sob gula plus kore average return korte hobe .

let makeAvgArray = [5, 7, 4, 3, 5, 8]
let ArrayLength = makeAvgArray.length;

function makeArray(array, length) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let receivedValue = array[i];
        sum = sum + receivedValue;
    }
    let avg = sum / length;
    return avg;
}
let last = makeArray(makeAvgArray, ArrayLength);
console.log("The average Result is :", last.toFixed(2));

// 4. akta arguments nite hobe abong check korte hobe eta jur nki bijur .

function oddEven(value) {
    if (value % 2 == 0) {
        return "This is Even Number .";
    }
    else {
        return "This is Odd Number .";
    }
}

let output = oddEven(5);
console.log(output);


// 5. akta variable nite hobe tarpor check korte hobe sob gula .

let color = "green";

switch (color) {
    case "red":
        console.log("Do not go");
        break;
    case "yellow":
        console.log("You should Stop");
        break;
    case "green":
        console.log("You may go now");
        break;
    default:
        console.log("darai darai mosa maro .");

}

// 5. alternative using switch .

let colors = "yellow";
if (colors == 'red') {
    console.log("Do not go at the time");
}
else if (colors == "yellow") {
    console.log("You need to stop right now");
}
else if (colors == "green") {
    console.log("You may go now ");
}
else {
    console.log("ki dorkar school jawyar , bari giye coding shiko .");
}