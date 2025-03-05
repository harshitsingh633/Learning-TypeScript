let x : number = 1; //Initializing the x variable to be a integer 
console.log(x);

let y : String = "Hi there"
console.log(y);


// A function that greets a user given their first name

function greet(firstName : String){
    console.log("Hello"+ firstName)
}

greet("Harshit")

//A function that calculate the sum of two 

function sum(a:number , b:number):number{
    return a + b;
}

console.log(sum(10,15));

//Create a function that takes another function as input, and runs it after 1 second.

function delaycall(fn: ()=>void){
    setTimeout(fn, 1000);
}

delaycall(function(){
    console.log("hi there");
    
})