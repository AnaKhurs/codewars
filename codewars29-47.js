//29 Simple multiplication
function simpleMultiplication(number) {
  return r = number % 2 === 0 ? number * 8 : number * 9;
}


//30 Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

//31The Wide-Mouthed frog!
function mouthSize(animal) {
  animal = animal.toLowerCase();
  return animal == "alligator" ? "small" : "wide";
}

//32The Feast of Many Beasts
function feast(beast, dish) {
  let i = beast.length - 1;
    let n = dish.length - 1;
    
   if (beast[0] === dish[0] && beast[i] === dish[n]) {
     return true;
   } else {
     return false;
   }
  }

  //33Enumerable Magic #25 - Take the First N Elements
  function take(arr, n) {
    return( arr.slice(0, n) );
    }

    //34Grasshopper - Debug sayHello
    function sayHello(name) {
      return 'Hello, ' + name;
    }

    // 35Convert a Boolean to a String
    function booleanToString(b){
      return String(b);
      }


      //36What is between?
      function between(a, b) {
        var list = [];
      for (var i = a; i <= b; i++) {
          list.push(i);
      } return list;
      }

      //37Fundamentals: Return
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

    //38Quarter of the year
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

    //39Grasshopper - If/else syntax debug
    function checkAlive (health) {
      if (health > 0) {
        return true;
      } else {
        return false;
      }
    }

    //40Grasshopper - Personalized Message
    function greet (name, owner) {
      if (name === owner ){
        return 'Hello boss';
      } else if (name !== owner ){
        return 'Hello guest';
      }
     }

     //41 Do you speak "English"?
     function spEng(sentence){

      const reg = /english/i;
      
      return reg.test(sentence);
    }

//42Sum The Strings
    function sumStr(a,b) {
      a = a === '' ? 0 : Number(a);
      b = b === '' ? 0 : Number(b);
      
      let c = a + b;
      return String(c);
    }

    //43Beginner Series #1 School Paperwork
    function paperwork(n, m) {
      if (n < 0 || m < 0) {
        return 0
      } else {
        return n * m;
      }
    }

    //44What's the real floor?
    function getRealFloor(n) {
      if (n <= 0){
        return n;
      } else if (n > 0 && n <= 13 ){
        return n - 1;
      } else if (n > 13 ){
        return n - 2;
      } 
     }
    

     //45Define a card suit
     function defineSuit(card) {
      switch(card[card.length - 1]){
         case '???': return 'clubs';
         case '???': return 'diamonds';
         case '???': return 'hearts';
         default: return 'spades';
      }
   }

   //46How old will I be in 2099?
  function  calculateAge(birthDate, otherDate) {

    var age = otherDate - birthDate;
    
      if(age === 1) {
      return 'You are ' + age + ' year old.';
        } else if(age > 1) {
          return 'You are ' + age + ' years old.';
        } else if (age < -1) {
          return 'You will be born in ' + (-age) + ' years.';
        } else if (age === -1) {
          return 'You will be born in ' + (-age) + ' year.';
        } else {
          return 'You were born this very year!';
        }
    }

    //47 Hello, Name or World!
    function hello(name) {
      if (typeof name === "undefined" || name.length === 0) {
        return `Hello, World!`;
      } else {
        return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
      }
    }