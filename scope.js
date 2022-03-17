const favNum = 27
function add(fst, second) {
    const result = fst + second;
    console.log(result);
    console.log(favNum)
    if(result > 9) {
        var mood = 'happy';
        mood = 'cranky'
    }
    console.log(mood)

    return result;
}

const sum = add(11, 50);