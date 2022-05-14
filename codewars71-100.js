//71 Is this a triangle?
function isTriangle(a,b,c){
    return (a+b > c && a+c > b && c+b > a) ? true : false
}
