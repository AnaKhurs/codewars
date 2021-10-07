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
