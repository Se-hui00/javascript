let person = "Alberto";
let age = 25;

function myTag(strings,personName,personAge){

  console.log(strings,personName,personAge);
  // [ '', ' is a ', '' ] Alberto 25
  
  let str = strings[1];
  let ageStr;

  personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

  return personName + str + ageStr;
}

let sentence = myTag`${person} is a ${age}`;
console.log(sentence);
// Alberto is a youngster