//В последовательности целых чисел определить сумму положительных четных чисел.

let arr = [-16, -10, -5, -1, 3, 5, 7,];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
       sum = sum + i;
    }
}
console.log(sum);