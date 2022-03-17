function welcomeMessage(name, greetHandler) {
    greetHandler(name)
}
// const name = ['Tom hanks','tom brady','tom faltu'];
// const myObj = {name:'tom chinku', age: 11};
function greetMorning(name) {
    console.log('good morning', name)
}
function greetAfternoon(name) {
    console.log('good afternoon', name)
}
function greetEvening(name) {
    console.log('good evening', name)
}
welcomeMessage('tom hanks', greetMorning);
welcomeMessage('sakib hanks', greetAfternoon);
welcomeMessage('bappa montau', greetEvening);

function handleClick() {
    console.log('button is clicked');
}
// callback fn examples
document.getElementById('my-btn').addEventListener('click', /* function */ handleClick)
document.getElementById('btn').addEventListener('click', /* function */ function(){

})