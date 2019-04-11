function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var i = katzDeliLine.indexOf(person) + 1;
  return `Welcome, ${person}. You are number ${i} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine[0] + ".";
  }
  else {
    // return "There is nobody waiting to be served!";
    return print()
  };
}

function print(){
  var a="There is obody waiting to be served!"
  console.log(a)
  return a
}
