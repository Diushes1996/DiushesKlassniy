//В последовательности целых чисел определить количество положительных чисел и количество элементов, значения которых находятся в интервале от 10 до -20.

let arr = [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Общее количество элементов в массиве:', arr.length);
let positive = [];
let negative = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>=0){
        positive.push(arr[i]);
    }else {
        negative.push(arr[i]);
    }
    //arr[i] >= 0 ? positive.push(arr[i]) : negative.push(arr[i]);
}
let result1 = 'количество положительных чисел:' + positive.length;
let result2 = 'количество отрицательных чисел:' + negative.length;
console.log(result1);
console.log(result2);
