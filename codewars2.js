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

    //Quarter of the year
    const quarterOf = (month) => {
      if (month <= 3 && month >= 1 ){
        return 1;
      } else  if (month <= 6 && month >= 4 ){
        return 2;
      } else  if (month <= 9 && month >= 7 ){
        return 3;
      } else  if (month <= 12 && month >= 10 ){
        return 4;
      }
      
    }

    //Grasshopper - If/else syntax debug
    function checkAlive (health) {
      if (health > 0) {
        return true;
      } else {
        return false;
      }
    }

    //Grasshopper - Personalized Message
    function greet (name, owner) {
      if (name === owner ){
        return 'Hello boss';
      } else if (name !== owner ){
        return 'Hello guest';
      }
     }

     // Do you speak "English"?
     function spEng(sentence){

      const reg = /english/i;
      
      return reg.test(sentence);
    }

//Sum The Strings
    function sumStr(a,b) {
      a = a === '' ? 0 : Number(a);
      b = b === '' ? 0 : Number(b);
      
      let c = a + b;
      return String(c);
    }

    //Beginner Series #1 School Paperwork
    function paperwork(n, m) {
      if (n < 0 || m < 0) {
        return 0
      } else {
        return n * m;
      }
    }

    //What's the real floor?
    function getRealFloor(n) {
      if (n <= 0){
        return n;
      } else if (n > 0 && n <= 13 ){
        return n - 1;
      } else if (n > 13 ){
        return n - 2;
      } 
     }
    