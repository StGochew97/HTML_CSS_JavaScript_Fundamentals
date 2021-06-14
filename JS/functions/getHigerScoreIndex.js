

// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(sum) {
    let sum = 0;
    for (i = 2; i <= 20; i += 2) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum[i]);

    // TEST:
    let arr = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    let sum = SumEven2DimArrayElements(arr);
    console.log(sum);
}
  // expected output: 12

