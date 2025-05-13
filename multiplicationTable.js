// nested loop to print a multiplication table from 1 to 10
let multiplicationTable = [];
for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
        row.push(i * j);
    }
    multiplicationTable.push(row);
}
console.log("Multiplication Table:");
for (let i = 0; i < multiplicationTable.length; i++) {
    console.log(multiplicationTable[i].join(" "));
}