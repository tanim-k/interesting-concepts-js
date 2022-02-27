/* 
falsy: false
  1. 0 is falsy
  2. empty string falsy
  3. variable without value is falsy; 
  4. null is falsy
  5. NaN is falsy
----------------------------------------------
truthy: true
1. any number (positive or negative)
2. 0 baad e shob number truthy
3. any string truthy
4. any string including single whitespace is truthy ex: '0' or 'false'
5. [] is truthy
6. {} is truthy
7. anything else is is not falsy will be truthy
*/
const x = false;
if(x){
    console.log('variable is truthy')
}
else{
    console.log('variable is falsy')
}
// truthy
const u = true;
if(u){
    console.log('variable is truthy')
}
else{
    console.log('variable is falsy')
}
// number 
let v= parseInt('null');
console.log('value of v:', v)
if(v){
    console.log('variable is truthy')
}
else{
    console.log('variable is falsy')
}
// empty array 
let b = {};
console.log('value of v:', b)
if(b){
    console.log('variable is truthy')
}
else{
    console.log('variable is falsy')
}