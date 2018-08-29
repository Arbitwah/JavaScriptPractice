// Here is a comment
/* Multiline
    Gregory Pugh 
    */
console.log("Hello JavaScript"); 
// Value or Data types
console.log("Hello from JavaScript");
console.log("Lets do some math");
console.log(4+7);
console.log(12/0);
console.log("Goodbye!");

let a = 3.14;
console.log(a);

const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3);
//temp3 =9;


// INCREMENT A NUMBER VARIABLE

let c = 0;  //C contains 0
c+= 1;      //C contains 1
c++;        //C contians 2
console.log(c); // Shows 2

// VARIABLE SCOPE

let num1 = 0;
{
    num1=1; // OK : num1 is declared in the parent block
    const num2 = 0;
    console.log(num2);
}
console.log(num1); // OK: num1 is declared in the current block 

const country = "France";
console.log(`I live in ${country}`);
const x= 3;
const y= 7

console.log(`${x} + ${y} = ${x+y}`); // Prints 3 + 7 = 10

console.log(4 + 5);
console.log("4 + 5");
console.log("4"+"5");
console.log(4+"5"); // converts the data types in this case it converts it to a string 

const g = "five" * 2;

//console.log(g);

const h = "5";
console.log(h+1);
const i  = Number(h); // Concatentation: show the string "51"
console.log(i+1);
const j = 6;
console.log("5"+ String(j)); //Numerical addition: show the number 6

//const d = Number("dog");
//console.log(g);

//STRICT EQAULITY USING ===

let num = 0;
let str = '0';

console.log(num === num) //true
console.log(str === str) //true 
console.log(num === str) //false
console.log(num == str) //true

const o = "abc";

switch (o){
    case "abc":
    console.log("x = abc");
    break;

    case "def":
    console.log("x = def");
    break;
    
    default:
    console.log("otherwise");
}

