function fullNameno() {
  let fName = 'Ruchita',
    lName = 'Rajpara';
  return fName + ' ' + lName;
}

function fullName(fName, lName) {
  return fName + ' ' + lName;
}

console.log(fullName('Ruchita', 'Ghodasara'));
console.log(fullNameno());

var addNo = (...args) => [...args].reduce((a, b) => a + b, 0);
var addNor = (a, b) => [a, b].reduce((a, b) => a + b, 0);

console.log(addNo(2, 3));
console.log(addNor(2, 3));

function areaOfRectangle(length, width) {
  let area = length * width;

  return area;
}

console.log(areaOfRectangle(2, 3));

function convertCelsiusToFahrenheit(cel) {
  let fernhit = cel * 1.8 + 32;

  return fernhit;
}

console.log(convertCelsiusToFahrenheit(20));

function findMax(a, b, c) {
  let aA = a,
    bB = b,
    cC = c;

  if (aA > bB || aA > cC || bB > cC) {
  }
}
