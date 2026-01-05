// Functions are chunks of code which can be used anywhere in our project
// Just like CSS classes

// Structure of a function
function helloWorld(){
    console.log("hello world");
}

// This function requires a value to work
// This value is called a parameter
function helloUser(user){
    console.log("Hello " + user);
}

// There is no limit to the number of parameter a function uses
function add(num1, num2){
    // Not all functions need to immediately output something
    // We can simply return a value to wherever this function is called
    let result = num1 + num2;
    return result;
}

function hi(name){
    alert("Hello " + name);
}