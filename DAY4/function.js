greet();//can be called before OR after function(hoisting)
function greet()
{
    console.log("hello");    
}
function hi(){
    console.log("hi");
}
hi();
console.log("----function expression-----");//function is assigned to a variable.->named and anonymous
const greeting=function(){  //anonymous
    console.log("Hello,this is function expression");    
};
greeting();// call after declaration
const hello=function hi(){ //named 
    console.log("Named function expression");
};
hello();

console.log("----callback function-----");//fucntion passed as argument to another function
function process(callback){
    console.log("Processing........");
    callback();
}
function done(){
    console.log("Completed....");
}
process(done);

console.log("-----Higher Order Function-----");//
function HigherOrder(fun){
    console.log("HigherOrder Function");
    fun();
}
function sayhi(){
    console.log("Hi");
}
HigherOrder(sayhi);
console.log("-----Arrow Function-----");//shorter and simple way to write function
const greet1=function(peyar){
    return "Hello"+ peyar;
}
const greetarrow=(peyar)=>{
    return "Hello"+ peyar;
};
console.log(greet1("Prans"));
console.log(greetarrow("prans"));

const add=(a,b)=>a+b;
console.log(add(2,3));






