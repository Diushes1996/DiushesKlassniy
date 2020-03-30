let numbers = [];
for (let i = 0; i < 7; i++) {
    numbers.push(Math.round(Math.random() * 10))
}

numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);