//71 Is this a triangle?
function isTriangle(a,b,c){
    return (a+b > c && a+c > b && c+b > a) ? true : false
}
//72 Square Every Digit
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('')
}
