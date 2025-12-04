const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.eyeColor);

let myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
console.log(myObj.myCars.car2);
console.log("------Array of Objects--------");

let students = [
    { name: "Pranavi", age: 21, grade: "A" },
    { name: "Ragavi", age: 22, grade: "B" },
    { name: "Priya", age: 21, grade: "A" }
];
console.log(students[0].name);   // Pranavi
console.log(students[1].age);    // 22
console.log(students[2].grade);  // A

let student=[
    { name: "Pranavi", age: 21, grade: "A" },
    { name: "Ragavi", age: 22, grade: "B" },
    { name: "Priya", age: 21, grade: "A" }
];
let names=student.filter(f=>f.age>21).map(n=>n.name);
console.log(names);




