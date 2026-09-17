
// Declare a variable
let age = 22;

//this is the print like python this is how you would call it
console.log(age);

age = 26;

// A constant variable.     this is different from let because this one cant be changed.    constant overrides the let if they have the same name
const rname = "Brother Warner";

//this shouldn't work
// name = "doctor Java";

const username = "billy bob"

// one way to use a const something that you don't want to change in this case they don't want to get sued so they don't want it to accidentally change it
const policyDisclaimer = "Just because you give use money, doesn't mean we have to give it back to you";

//scope = where you can reference a variable 
//curly braces like CSS
if(age == 22){
    // a new scope
    console.log(username);
    let favoritecolor = blue
    //inner scope 
}
//outer scope cant talk to inner scope like so
//console.log(favoriteColor);
//favorite color only exists inside the scope. the one above says the favoritecolor does not exist unless you do the following
let favoriteColor = "green";
//you could also put const and it would work because it is not in the same scope
console.log(favoriteColor)

// garb our H1 from the DOM and color it with CSS
document.querySelector("h1").style.color = "blue";

console.log(username);

console.log(rname)