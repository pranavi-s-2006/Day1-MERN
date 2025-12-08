/* console.log("start"); //Functions running in parallel with other functions are called asynchronous
setTimeout(()=>{
    console.log("This is printed after 3 secs");
    
},3000);
console.log("end");

setTimeout(()=>{
    console.log("1.made tea");

    setTimeout(()=>{
        console.log("2.toasted bread");

        setTimeout(()=>{
            console.log("3.fried egg");
            
        },5000);
        
    },5000);
    
},5000);
console.log("----promise-----");
let myPromise = new Promise((resolve, reject) => {
    let workDone = true;

    if(workDone){
        resolve("👍Task completed!");
    } else {
        reject("👎🏻Task failed!");
    }
});
myPromise
    .then(result => console.log(result))   // success
    .catch(error => console.log(error));   // error
console.log();

 */
console.log("-----Asyn/Await--------");

let icecreamPromise=new Promise((resolve,reject)=>{
    let icecreamReady=false;
    if(icecreamReady){
        resolve("Ice Cream is ready");
    }
    else{
        reject ("No ice cream today");
    }
});
async function getIceCream(){
    try {message =await icecreamPromise;
    console.log("Yay "+message);
}catch(error){
console.log("Oops! "+error);
}
}
getIceCream();