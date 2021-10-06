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