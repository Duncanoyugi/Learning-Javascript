 // This program iterates through an array of objects and filters it based on given properties
let people = [
    { name: "Duncan", age: 25, city: "Kisumu" },
    { name: "Hallan", age: 32, city: "Nairobi" },
    { name: "Victor", age: 35, city: "Nairobi" }, 
    { name: "Collins", age: 22, city: "Eldoret" },
    { name: "Kevin", age: 30, city: "Mombasa" },
    { name: "Jared", age: 40, city: "Kisumu" },
    { name: "Robert", age: 28, city: "Nairobi" },
];

// Filters people who are older than 30 and live in Nairobi
let filteredPeople = people.filter(person => person.age > 30 && person.city === "Nairobi");

console.log("The people who are above 30 years and live in Nairobi are:");
filteredPeople.forEach(person => console.log(person.name));