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

    //Grasshopper - Debug sayHello
    function sayHello(name) {
      return 'Hello, ' + name;
    }

    // Convert a Boolean to a String
    function booleanToString(b){
      return String(b);
      }


      //What is between?
      function between(a, b) {
        var list = [];
      for (var i = a; i <= b; i++) {
          list.push(i);
      } return list;
      }

      //Fundamentals: Return
      function add(a,b){
        return a + b;
    }
    
    function divide(a,b){
        return a / b;
    }
    
    function multiply(a,b){
        return a * b;
    }
    
    function mod(a,b){
        return a % b;
    }
       
    function exponent(a,b){
        return a ** b;
    }
        
    function subt(a,b){
        return a - b;
    }