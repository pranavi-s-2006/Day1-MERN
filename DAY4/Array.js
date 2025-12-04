/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newlength = fruits.push("Kiwi");// add at end
console.log(fruits);
console.log(newlength); */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newlength = fruits.unshift("Kiwi"); //add at begining
console.log(fruits);
console.log(newlength); */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newlength = fruits.pop(); //remove at last
console.log(fruits);
console.log(newlength); */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newlength = fruits.shift(); //remove at first
console.log(fruits);
console.log(newlength);
const citrus = fruits.slice(1,3);//exclude 3 and print 1 10 2
let lasttwo=fruits.slice(-2);
console.log(citrus);
console.log(lasttwo);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(num=>num>10);// only gives the first number
console.log(first);
let even = numbers.find(num=>num%2==0);
console.log(even);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let length=fruit.find(name=>name.length>5);
console.log(length);

let nums=[1,2,3,4,5];
let double=nums.map(n=>n*2);//check and map with each and every value
let all= nums.map(num=>num>3);
let add100=nums.map(a=>a+100);
console.log(double);
console.log(all);
console.log(add100);

let names=["prans","ragzz","prizz"];
let miss=names.map(n=>"Miss."+n);
console.log(miss);

const num = [4, 9, 16, 25, 29];
let fil = num.filter(num=>num>10);
console.log(fil);

let marks=[100,60,80,90,75];
console.log(marks.filter(mar=>mar>80));

let arr = [10, 20, 30, 40];

let total = arr.reduce((acc, value) => acc + value, 0);

console.log(total);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
console.log([...arr1,...arr2]);//spread operator(concat)


