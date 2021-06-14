

// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// Note that the Zero is neither positive nor negative number!

// HINT: you can push a value in a array by using array.push(value) method. 

const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];

// >>>>> your code goes bellow:
for (var i = 0; i < numbersArr.length; i++) {
    const element = numbersArr[i];
  
    if ((element > 0) && (element % 2 === 0)) {
      numbersArr.push(evenNums);
      console.log(`even nums: ${element}`);
    }
  }
  
  for (var i = 0; i < numbersArr.length; i++) {
    const element = numbersArr[i];
  
    if ((element < 0) && (element % 2 !== 0)) {
      numbersArr.push(oddNums);
      console.log(`odd nums: ${element}`);
    }
  }

