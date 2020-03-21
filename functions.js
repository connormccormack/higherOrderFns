// functions as arguments (1)

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world')
}

function goodbye() {
  console.log('Goodbye world')
}

// repeat(hello, 5);
// repeat(goodbye, 5);

// functions as arguments (2)

function filter(arr, func) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// Functions as return values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return (location) => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado incoming!');
const typhoonWarning = hazardWarningCreator('A typhoon is about to blow you away');
// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');
// tornadoWarning('Florida');
// tornadoWarning('Hawaii');
// typhoonWarning('Vietnam');
// typhoonWarning('Bali');

// forEach, filter, and map

let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
positiveMovements = turtleMovements.filter(element => (element[0] >= 0 && element[1] >= 0));
summedMovements = positiveMovements.map(element => element[0] + element[1])
// summedMovements.forEach(element => console.log(`Movement #${(summedMovements.indexOf(element) + 1)}: ${element} steps`));

// reduce
const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const wordArray = input.split(' ');
const reducer = (accumulator, currentValue) => {
  if (currentValue.length === 3) {
    return accumulator + ' ';
  } else {
    return accumulator + currentValue[currentValue.length - 1].toUpperCase();
  }
};
console.log(wordArray.reduce(reducer, '')) 
