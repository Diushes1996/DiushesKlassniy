//Если среди трех чисел А,В,С имеется хотя бы одно четное вычислить максимальное, иначе - минимальное

let a = 7;
let b = 11;
let c = 17;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(Math.max(a, b, c));
} else {
    console.log(Math.min(a, b, c));
}