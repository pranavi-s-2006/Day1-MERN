/*let [name, age, grade] = ["Pranavi", 21, "A"];
console.log(name);
console.log(age);
console.log(grade);*/

console.log("----rest operator-----");
let [first, ...others] = [10,20,30,40];
console.log(first);    // 10
console.log(others);   // [20,30,40]

console.log("---object desturcture----");
let user = { name: "Pranavi", age: 21, grade: "A" };
const { name, age, grade } = user;
console.log(name);
console.log(age);
console.log(grade);
console.log("----function destructure-----");
function show({peyar, vayasu}){
    console.log(`hello ${peyar},you are ${vayasu}`);
}
show({
    peyar:"Vibus",
    vayasu:19
});







