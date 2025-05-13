// checks if a given number is prime using a while loop
let number = 12;
let isPrime = true;
let i = 2;

if (number <= 1) {
    isPrime = false;
} else {
    while (i <= Math.sqrt(number)) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}