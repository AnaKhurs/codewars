// Simple multiplication
function simpleMultiplication(number) {
  return r = number % 2 === 0 ? number * 8 : number * 9;
}


// Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

//The Wide-Mouthed frog!
function mouthSize(animal) {
  animal = animal.toLowerCase();
  return animal == "alligator" ? "small" : "wide";
}

//The Feast of Many Beasts
function feast(beast, dish) {
  let i = beast.length - 1;
    let n = dish.length - 1;
    
   if (beast[0] === dish[0] && beast[i] === dish[n]) {
     return true;
   } else {
     return false;
   }
  }

  //Enumerable Magic #25 - Take the First N Elements
  function take(arr, n) {
    return( arr.slice(0, n) );
    }