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
  if (aA > bB && aA > cC) {
    return aA;
  } else if (bB > aA && bB > cC) {
    return bB;
  } else if (cC > aA && cC > bB) {
    return cC;
  }
}

console.log(findMax(1, 2, 3));

function showDateTime() {
  let dateT = new Date();
  let n = dateT.toDateString();
  let t = dateT.toLocaleTimeString();
  var m = dateT.toLocaleDateString();
  var z = dateT.toLocaleString();
  console.log(m, t);
  console.log(n, z);
}
showDateTime();

function evensAndOdds(val) {
  let countE = 0,
    countO = 0;

  for (let i = 0; i <= val; i++) {
    if (i % 2 === 0) {
      countE++;
    } else {
      countO++;
    }
  }
  console.log('The number of odds are ' + countO);
  console.log('The number of evens are ' + countE);
  return;
}

console.log(evensAndOdds(100));

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4));

function randomIP() {
  var ip =
    Math.floor(Math.random() * 255) +
    1 +
    '.' +
    Math.floor(Math.random() * 255) +
    '.' +
    Math.floor(Math.random() * 255) +
    '.' +
    Math.floor(Math.random() * 255);
  return ip;
}
console.log(randomIP());

function randomMacaddress() {
  var letters = '0123456789ABCDEF';
  var macid =
    letters.charAt(Math.floor(Math.random() * 16)) +
    letters.charAt(Math.floor(Math.random() * 16)) +
    ':' +
    letters.charAt(Math.floor(Math.random() * 16)) +
    letters.charAt(Math.floor(Math.random() * 16)) +
    ':' +
    letters.charAt(Math.floor(Math.random() * 16)) +
    letters.charAt(Math.floor(Math.random() * 16)) +
    ':' +
    letters.charAt(Math.floor(Math.random() * 16)) +
    letters.charAt(Math.floor(Math.random() * 16)) +
    ':' +
    letters.charAt(Math.floor(Math.random() * 16)) +
    letters.charAt(Math.floor(Math.random() * 16)) +
    ':' +
    letters.charAt(Math.floor(Math.random() * 16)) +
    letters.charAt(Math.floor(Math.random() * 16));
  ('-');
  return macid;
}

console.log(randomMacaddress());

function randomHexaNumberGenerator(len) {
  let result = '';
  for (var i = 0; i < 6; i++) {
    result += Math.floor(Math.random() * 16).toString(16);
  }
  console.log(`#${result}`);
}

console.log(randomHexaNumberGenerator());

function rgbColorGenerator() {
  var rgba = Math.round(Math.random() * 255);

  return (
    'rgba (' +
    rgba +
    ',' +
    rgba +
    ',' +
    rgba +
    ',' +
    Math.random().toFixed(1) +
    ')'
  );
}

console.log(rgbColorGenerator());

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

console.log(shuffleArray([1, 2, 5, 6]));

function getFactorialForLoop(n) {
  let result = 1;
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  } else {
    return 'n has to be positive';
  }
}
console.log(getFactorialForLoop(5));

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(10));

function isPrime(number) {
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log('1 is neither prime nor composite number.');
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  }

  // check if number is less than 1
  else {
    console.log('The number is not a prime number.');
  }
}

console.log(isPrime(7));
