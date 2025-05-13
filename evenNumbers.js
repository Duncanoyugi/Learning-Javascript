// program that prints all even numbers between 1 and 100 using a for loop
let evenNumbers = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log("The numbers are: " +evenNumbers.join(", "));