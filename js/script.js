
// subhanallah

const subhanallahDisplay = document.getElementById('subhanallahdisplay');

const subhanallahIncrement = document.getElementById('subhanallahincrement');


const subhanallahDecrement = document.getElementById('subhanallahdecrement');



// Alhamdulillah
const alhamdulillahDisplay = document.getElementById('alhamdulillahdisplay');

const alhamdulillahIncrement = document.getElementById('alhamdulillahincrement');

const alhamdulillahDecrement = document.getElementById('alhamdulillahdecrement');


// Allahuakber

const allahuakbarDisplay = document.getElementById('allahuakbardisplay');

const allahuakbarIncrement = document.getElementById('allahuakbarincrement');

const allahuakbarDecrement = document.getElementById('allahuakbardecrement');


// resetbutton
const resetButton = document.getElementById('resetbutton');



// variable declare

let subhanallahValue = 0;

let alhamdulillahValue = 0;

let allahuakberValue = 0;


// subhanAllah
subhanallahIncrement.addEventListener('click', function () {
    // validation
    if (subhanallahValue >= 33) {
        return alert('Subhanallah count complete, please start count another one');
    }

    subhanallahValue = subhanallahValue + 1;
    subhanallahDisplay.innerText = subhanallahValue;

})


subhanallahDecrement.addEventListener('click', function () {

    // validation
    if (subhanallahValue <= 0) {
        return alert('You can not added negative number');
    }

    subhanallahValue -= 1
    subhanallahDisplay.innerText = subhanallahValue;
})


// Alhamdulillah
alhamdulillahIncrement.addEventListener('click', function () {

    // validation
    if (alhamdulillahValue >= 33) {
        return alert('Alhamdulillah count complete, please start count another one');
    }

    alhamdulillahValue = alhamdulillahValue + 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
})

alhamdulillahDecrement.addEventListener('click', function () {

    // validation
    if (alhamdulillahValue <= 0) {
        return alert('You can not added negative number');
    }
    alhamdulillahValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
})



// Allahukaber
allahuakbarIncrement.addEventListener('click', function () {
    // validation
    if (allahuakberValue >= 34) {
        return alert('Allahuakber count complete, please start count another one');
    }

    allahuakberValue = allahuakberValue + 1;

    allahuakbarDisplay.innerText = allahuakberValue;

})

allahuakbarDecrement.addEventListener('click', function () {
    // validation
    if (allahuakberValue <= 0) {
        return alert('You can not added negative number');
    }

    allahuakberValue -= 1;
    allahuakbarDisplay.innerText = allahuakberValue;
})


// reset button
resetButton.addEventListener('click', function(){
    subhanallahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuakbarDisplay.innerText = 0;

    subhanallahValue = 0;
    alhamdulillahValue = 0;
    allahuakberValue = 0;
})