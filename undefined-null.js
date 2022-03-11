/* notes where shows undefined */
/* 
 1. variable value not assigned
 2. fn but didnt write return
 3. just wrote return but didnt return anything
 4. any of one parameter that isnt passed
 5. property that dosent exist in an object
 6. accessing array element out of range
 7. deleted element console korte gele
 8. explicitly set value to undefined
*/
let first;
// console.log(first)
function second(x, y){
    const sum = x+y;
}
// fn calling 
const result = second(332, 56);
// console.log(result);
function add(a, b) {
    const sum = a+b;
    if(b<10){
        return;
    }
    const fun = a*b;
    return sum;
}   
const fourth = add(2,7);
console.log(fourth)
// if parameter is not passed properly
function double(a,b){
    const result = a*b
    console.log(b)
}
double(6);
// 5
const fifth = {name:'sagor', age:15, location:'agortola'};
console.log(fifth.phone);
// 6
const sixth =[12,121221,34,34,45,56,7,87];

// delete case showing
delete sixth[1]
console.log(sixth)
// oi element delete hoye gese ekhon jodi access korte chai 

console.log(sixth[1])

// 7
const fu = undefined;
console.log(fu);


// 8
const myoj = {name:'samad', profession: null}
console.log(myoj.profession)
// const colors = {mango: 'green', grapes: 'black', organe: 'yellow'};
// console.log(colors[grapes])

// const b=6 , b=6
// console.log(b);
const p = '';
console.log(Map.p);

// const name = 'Hero';const age = 34;
// const person = {name, age}; console.log(person);

const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;
console.log(ratName)

let person =null;
console.log(person ? person : "person is null");

const obj = {a:1};
console.log(Object.keys(obj).length===0);
