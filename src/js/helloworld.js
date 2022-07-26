function add(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  } else {
    console.log('Please provide valid numbers');
  }
}

module.exports = add;
