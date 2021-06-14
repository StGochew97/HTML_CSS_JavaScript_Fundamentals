// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven() {
    let numbers = [2, -4, 5, 3, 9, 0, 1];
    let max = findMaxEven(numbers);
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 2 === 0) && (numbers[i] > 0)){
            console.log(max[i]);
        }
    }
    console.log(`The max of ${numbers} is ${max}`);
}
findMaxEven();
// TEST
// let numbers = [2, -4, 5, 3, 9, 0, 1];
// let max = findMaxEven(numbers);
// console.log(`The max of ${numbers} is ${max}`);