// Push numbers 0 - 50 into this array. Use the push method to do this.
// Hint. Using a loop will be a good use case in this scenario.
// Use the built in array method filter to filter out even numbers of the array.

// From there, add each and every number from the array.

let numbers = [];

for (let i = 0; i <= 50; i++) {
  numbers.push(i);
}
numbers = numbers.filter((num) => {
  return num % 2 != 0;
});

for (let i = 0, i < numbers.length, i++){
    sum += numbers[i];
}
console.log (numbers);
console.log(sum)
