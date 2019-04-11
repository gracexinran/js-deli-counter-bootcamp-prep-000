function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var i = katzDeliLine.indexOf(person) + 1;
  return `Welcome, ${person}. You are number ${i} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var a=katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + a  + ".";
  //  
  }
  else {
    return "There is nobody waiting to be served!";
  }

}
