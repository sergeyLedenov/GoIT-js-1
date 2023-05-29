// 1st quest
let age = 14;
console.log(age);

// 2nd quest
let name = "Serguy";
console.log(name);

// 3th quest
let isStudent1 = undefined == null; //все одно вихлде тру або фолс
let isStudent2 = undefined === null; //все одно вихлде тру або фолс
console.log("якщо мається на увазі тільки студент коледжу(умовно), то " + isStudent2 + " якщо ж можно мати на увазі наприклад GoIT, то " + isStudent1);

// 4th quest
let myString = "Moya ulublena citata"
console.log(myString);

// 5th quest
let myNumber = NaN;
myNumber+=5;
console.log(myNumber + " (typeof(NaN) --> Number)");

// 6th quest
let myNull = null;
console.log(myNull);

// 7th quest
function quest7 () {
    let name7 = prompt("your name = ?", "");
    alert("hi " + name7 + "!");
}

// 8th quest
function quest8 () {
    let _confirm = confirm("do you confirm?");
    if (_confirm) {
        alert("Congradulation, thanks 4 povidomlenna");
    } else if (!_confirm) {
        alert("Diya vidmovlena");
    }
}

// last quest
function lastQuest () {
    alert("Diya nebezpechna");
    let last_confirm = confirm("is you podtvershdayete diyu?");
    if (last_confirm) {
        alert("ok");
    } else if (!last_confirm) {
        alert("Diya vidmovlena");
    }
}
//end