let age=25; //can't redeclare but reassign
age=30; // no let age=30;
console.log(age);
 var a=25; // var can be redeclared and reassigned
 var a=30;
 a=15;
 console.log(a);
const b=10;
console.log(b);
console.log("-------hoisting--------");
console.log(x);
var x=10; // only applicable for var keyword(o.p=undefined)
console.log(y);
let y=9; //cannot access y without initializing (not applicable for let)=reference error

console.log("-------function Scope--------");
function ex(){
    if(1){
        var count=10; //function scope variable
    }
    console.log(count);    
}
ex();
function ex1(){
    if(1){
        let c1=10;//let block scope variable
    }
    console.log(c1);    
}
ex1();

