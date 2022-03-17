// console.log(mood)
const favNum = 27
function add(fst, second) {
    const result = fst + second;
    console.log(result);
    // console.log(mood)
    if(result > 9) {
         mood = 'happy';
        mood = 'cranky'
    }
    console.log(mood)

    return result;
}

const sum = add(11, 50);
console.log(mood)

// leak in for loop using var 
for(let i=0; i<10; i++) {
    console.log(i)
}
