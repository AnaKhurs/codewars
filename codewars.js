// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

function century(year) {
  let centuryCount = 0;
  while (year > 0) {
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}


/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

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


//Will there be enough space

function enough(cap, on, wait) {
  if (wait <= cap - on) {
    return 0;
  } else {
    return wait - cap + on;
  }
}

//Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor(s/ 0.036); 
}


//Is he gonna survive?
function hero(bullets, dragons){
  if(bullets >= dragons*2){
    return true;
  } else{
    return false;
  }
  }

  //Complete the square sum function so that it squares each number passed into it and then sums the results together.

  function squareSum(numbers){
    let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]*numbers[i];
  }
     return sum;
  }

  //Opposites Attract
  function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
      return true;
    } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  // When provided with a number between 0-9, return it in words.

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

    //Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
    function even_or_odd(number) {
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }


    // Opposite number
    function opposite(number) {
      return number * -1;
    }