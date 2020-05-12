//Составить программу для решения квадратного уравнения a∗x∗x+b∗x+c=0.

let a = 2; //задание переменной a
let b = 5; //задание переменной b
let c = 12; //задание переменной c

let D = (b * b - 4 * a * c);
if (D < 0) {
    console.log("False");
} else {
    let x1 = ((-b - Math.sqrt(D)) / 2 * a);
    let x2 = ((-b + Math.sqrt(D)) / 2 * a);
    console.log(x1, x2);
}