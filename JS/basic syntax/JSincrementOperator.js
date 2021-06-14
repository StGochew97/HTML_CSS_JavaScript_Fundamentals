// Задача: помислете и посочете какво ще се изпише в конзолата, а след това стартирайте скрипта и сравнете вашите отговори:
var a = 1, b = 1;
console.log( a++ + ++a); // 4
console.log( ++b + b++); // 4
console.log( a + b); // 6


var x = 1, y  = 1;
console.log( x++ == ++x); // false
console.log( ++y == y++); // true
console.log(x == y) // true