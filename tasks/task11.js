//В последовательности целых положительных чисел опредeлить максимальное четное число и его порядковый номер.

let arr = [11, 2, 3, 15, 5, 6, 24, 8, 9, 10];

let even = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
           even.push(arr[i]);
    }
}
let max = Math.max.apply(null, even);
console.log(max);

//ДОРЕШАТЬ
// не знаю как определить порядковый номер (+как определить количество символов в числе)