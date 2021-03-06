// 1 The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

function century(year) {
  let centuryCount = 0;
  while (year > 0) {
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}


/*2_You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
  var i = a.length;
  while (i--) {
     if (a[i] === x) {
         return true;
     }
  }
  return false;
}


//3_Will there be enough space

function enough(cap, on, wait) {
  if (wait <= cap - on) {
    return 0;
  } else {
    return wait - cap + on;
  }
}

//4_Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor(s/ 0.036); 
}


//5_Is he gonna survive?
function hero(bullets, dragons){
  if(bullets >= dragons*2){
    return true;
  } else{
    return false;
  }
  }

  //6_Complete the square sum function so that it squares each number passed into it and then sums the results together.

  function squareSum(numbers){
    let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]*numbers[i];
  }
     return sum;
  }

  //7_Opposites Attract
  function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
      return true;
    } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  //8_ When provided with a number between 0-9, return it in words.

  function switchItUp(number){
    switch(number){
        case 1: return "One";break;
        case 2: return "Two";break;
        case 3: return "Three";break;
        case 4: return "Four";break;
        case 5: return "Five";break;
        case 6: return "Six";break;
        case 7: return "Seven";break;
        case 8: return "Eight";break;
        case 9: return "Nine";break;
    }
    }

    //9_Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
    function even_or_odd(number) {
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }


    //10_ Opposite number
    function opposite(number) {
      return number * -1;
    }

    //11_Sum of positive
    function positiveSum(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
          sum += arr[i];
        }
      } return sum;
    }
    

    //12_ Convert boolean values to strings 'Yes' or 'No'.
    function boolToWord( bool ){
      if (bool == true){
        return "Yes";
      } else {
        return "No";
      }
    }


    //13_Reversed Strings
    function solution(str){
      let s = ""
      for (let i = str.length - 1; i >= 0; i--){
        s += str[i];
      } return s;
    }

    //14_Convert a Number to a String!
    function numberToString(num) {
      var n = num.toString();
        return n;
      }

      //15_Summation
      var summation = function (num) {
        let sum = 0;
      while (num > 0) {
        sum += num;
        num--;
      } return sum;
      }

      //16Counting sheep
      function countSheeps(arrayOfSheep) {
        let sum = 0;
        for (let i = 0; i < arrayOfSheep.length; i++){
          if (arrayOfSheep[i] === true ) {
            sum += 1;
          }
        } return sum;
      }

      //17Convert a String to a Number!
      var stringToNumber = function(str){
let num = Number(str); // ???????????????????? ???????????? 123
return num;
}

//18Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  if (operation === "+"){
    return value1 + value2;
  } else if (operation === "-"){
    return value1 - value2;
  } else if (operation === "*"){
    return value1 * value2;
  }else if (operation === "/"){
    return value1 / value2;
  }
}

//19 Function 1 - hello world
function showMessage() {
  let message = "????????????, ?? JavaScript!"; // ?????????????????? ????????????????????

  alert( message );
}

//20Jenny's secret message
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
  } else {
      return "Hello, " + name + "!";
  }
}