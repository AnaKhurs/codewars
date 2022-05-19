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
