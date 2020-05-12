//Ввести два числа. Меньшее заменить их полусуммой, а большее - удвоенным произведением.

let a = 10;
let b = 15;

if (a === b) {
    console.log("False");
} else if (a < b) {
    let newA = (a + b) / (2);
    let newB = 2 * a * b;
    console.log(newA, newB);
} else {
    let newA = 2 * a * b;
    let newB = (a + b) / (2);
    console.log(newA, newB);
}