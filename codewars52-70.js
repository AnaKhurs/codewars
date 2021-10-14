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
  
  if (sub == tail){ 
    return true;
  }
  else {
    return false;
  }
}


//54 Area or Perimeter
const areaOrPerimeter = function(l , w) {
  if (l===w) {
    return l*w;
  } else {
    return 2*(l+w)
  }
};