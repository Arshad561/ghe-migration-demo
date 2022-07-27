console.log('hello world');

function add(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  } else {
    console.log('Please provide valid numbers');
  }
}

function difference(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    const diff = num1 - num2;
    console.log(`The difference of ${num1} and ${num2} is ${diff}`);
  } else {
    console.log('Please provide valid numbers');
  }
}

add(2, 3);
difference(10, -100);
