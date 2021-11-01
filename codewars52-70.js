// 52 Thinkful - Logic Drills: Traffic light
function updateLight(current) {

  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }

}

//53 Is this my tail?
function correctTail(body, tail) {

  let sub = body.substr(-1);

  if (sub == tail) {
    return true;
  }
  else {
    return false;
  }
}


//54 Area or Perimeter
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w)
  }
};

//55 Hex to Decimal
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

//56 Double Char
function doubleChar(str) {
  let r = "";
  for (let i = 0; i < str.length; i++) {
    r += str[i] + str[i];
  } return r;
}

//57 Grasshopper - Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//58 Convert a string to an array
function stringToArray(string) {

  return string.split(' ')

}

//59 Filter out the geese
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((b) => !geese.includes(b))
};

//60 Multiple of index
function multipleOfIndex(array) {
  return array.filter((el, idx) => el % idx === 0);
}


//61 JavaScript Array Filter
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(i => i % 2 === 0)
}

//62 Remove Empty Items of Array
function clean(arr) {
  return arr.filter(i => i || undefined || null || NaN || false || 0 || [])
}


//63 Testing 1-2-3
let number = function (array) {
  return array.map((element, index) => `${index + 1}: ${element}`);
}


// 64 Array plus array
function arrayPlusArray(arr1, arr2) {

  let result1 = arr1.reduce((sum, current) => sum + current, 0);
  let result2 = arr2.reduce((sum, current) => sum + current, 0);

  return result1 + result2;
}

//65 Sort arrays - 1
// input: names - unsorted array
// output: sorted array
sortme = function (names) {
  return names.sort()
}

//66 Return Negative
function makeNegative(num) {
  return num > 0 ? -num : num
}