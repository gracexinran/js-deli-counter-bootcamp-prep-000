function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var i = katzDeliLine.indexOf(person) + 1;
  return `Welcome, ${person}. You are number ${i} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var a =katzDeliLine[0]
    return "Currently serving " + a + ".";
  }
  else {
    // return "There is nobody waiting to be served!";
    return print()
  };
}

function print(){
  console.log("There is nobody waiting to be served!")
}
