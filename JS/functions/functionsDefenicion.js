

// ***********************
// Function Declarations:
// ***********************
// Дефиниция на функция без параметри, върнатия резултат е 'undefined'
function welcomePrompt () {
    var name = prompt("Здравейте! Бихте ли се представили?","моля, въведете Вашето име тук");
    alert("Добре дошли на борда, " + name + "!");
}

// Дефиниция на функция с 1 параметър, върнатия резултат е 'undefined'
function welcome(name){
    alert("Добре дошли на борда, " + name + "!");
}

// Дефиниция на функция с 1 параметър, и връщане на явен резултат
function isЕven(x){
    if( x % 2 == 0){
        return true;
    }else{
        return false;
    }
}

// Дефиниция на функция с 1 параметър, върнатия резултат е 'undefined'
function conditionalStatemens(age){
    var status;
    if (age > 19) {
        status = "adult";
    } else if ( age < 19 && age >13) {
        status = "teen";
    }else {
        status = "child"
    }

    alert(status);
}

// Дефиниция на функция с 2 параметъра, върнатия резултат е 'undefined'
function sum(x,y){
    var total = x+y;
    alert("Сумата е "+total);
}

// Дефиниция на функция с 2 параметъра, и връщане на явен резултат
function sum(x,y){
    var total = x+y;
    return total;
}

// ***********************
// Function Variable:
// ***********************
// Името на функцията е променлива, чиято стойност (а function object) можем да присвоим на друга променлива:
var sumVar = sum;
console.log( "sumVar(3,4) = ", sumVar(3,4) );


// ***********************
// Function Expression:
// ***********************
// Можем да дефинираме една функция и чрез израз:
var sumVarNew = function(x,y){
    var total = x+y;
    return total;
}; //тук трябва да сложим ';'
console.log( "sumVarNew(3,4) = ", sumVarNew(3,4) );

