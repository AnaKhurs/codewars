// A Needle in the Haystack
function findNeedle(haystack) {
  let f = "found the needle at position ";
  let n = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle"){
      n = n + i;
    }
  } return f + n;
}

//You Can't Code Under Pressure #1
function doubleInteger(i) {
  
  return i*2;
}


//Invert values
function invert(array) {
  let arr = array.map(item => -item);
    return arr;
 }

 //Fake Binary
 function fakeBin(x){
  let y = '';
for (let i = 0; i < x.length; i++){
  if (x[i] < 5){
    y += 0;
  } else if (x[i] >= 5){
    y += 1;
  } 
} return y;
}

// Sum Numbers
function sum (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  } return sum;
};

//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  let r;
  if (name[0] === "r" || name[0] === "R" ) {
    r = name + " plays banjo";
  } else {
    r = name + " does not play banjo";
  }
  return r;
}

//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
  if (fuelLeft * mpg >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
  
  return average > yourPoints ? false : true
}
