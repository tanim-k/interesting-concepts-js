/*
1. number
2. string
3. boolean
4. null
5. undefined
6. object
7. symble
 */
// primitive
let a = 'hello'
let b = a;
console.log(a, b)
a = 'gello'
console.log(a, b)
// non-primitive
const x = {job: 'web-developer'};
const y = x;
console.log(x, y);
// x.job = 'front end developer'
y.job = 'front end developer'
console.log(x, y);

