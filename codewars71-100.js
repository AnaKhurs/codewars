//71 Is this a triangle?
function isTriangle(a,b,c){
    return (a+b > c && a+c > b && c+b > a) ? true : false
}
//72 Square Every Digit
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('')
}

//73 Reverse words
function reverseWords(str) {
    str = str.split(' ');
    str = str.map(x => x.split('').reverse());
    str = str.map(x => x.join(''));
    return str.join(' ');
}

//74 Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if(input === null) {
        return []
    }
    if(input.length === 0) {
        return []
    }
    const res1 = input.filter(item => item > 0).length
    const res2 =  input.filter(item => item < 0).reduce((sum, current) => sum + current, 0)
    return [res1, res2];
}

//75 Convert number to reversed array of digits
function digitize(n) {
    let initialArray = String(n).split('');
    let reversedArray = [];
    for (let i = initialArray.length - 1; i >= 0; i--) {
        reversedArray[i] = Number(initialArray.shift());
    }
    return reversedArray;
}

console.log(digitize(348597));

//76 Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {

    let catYears = 15
    let dogYears = 15

    if(humanYears > 2){
        catYears = 15 + 9 + (humanYears-2)*4
        dogYears  = 15 + 9 + (humanYears-2)*5
    }
    if(humanYears === 2){
        catYears = 15 + 9
        dogYears  = 15 + 9
    }

    return [humanYears,catYears,dogYears];
}

//77 Is n divisible by x and y?
function isDivisible(n, x, y) {
    return (n%x == 0 && n%y ==0) ? true : false;
   }