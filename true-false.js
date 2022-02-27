/* 
falsy: false
  0 is falsy
  empty string falsy
  variable without value is falsy; 
----------------------------------------------
truthy: true
1. any number (positive or negative)
2. 0 baad e shob number truthy
3. any string truthy
4. any string including single whitespace is truthy ex: '0' or 'false'
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
let v;
console.log('value of v:', v)
if(v){
    console.log('variable is truthy')
}
else{
    console.log('variable is falsy')
}