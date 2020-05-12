//Ввести три числа А,В,С. Удвоить каждое из них, если А>=В>=С, иначе поменять значения А и В.

let A = 4;
let B = 4;
let C = 4;

if (A>=B && B>=C && A>=C) {
    let newA = A*2;
    let newB = B*2;
    let newC = C*2;
    console.log(newA, newB, newC);
} else if(A<B || A<C) {
    console.log("задайте большее число А");
} else if(B<C) {
    console.log("задайте большее число В");
} 