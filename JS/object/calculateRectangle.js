//TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:
function calcRectangleArea(rectWidth, rectHeight){
    let theRectWidth = rectWidth;
    let theRectHeight = rectHeight;
    let sum = theRectHeight * theRectWidth
    console.log(`The area of rectangle is ${sum}`);
    }
    calcRectangleArea(6,3);
    // ---> YOUR CODE HERE <---
    
    // TEST:
    // let rectWidth = 6;
    // let rectHeight = 3;
    
    // let area = calcRectangleArea(rectWidth, rectHeight);
    
    // console.log(`The area of rectangle is: ${area}`);
    
    // expected result:
    // The area of rectangle is: 18