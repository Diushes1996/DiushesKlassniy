//Составить программу, которая бы по названию месяца вы- давала бы время года, к которому он принадлежит.

let spring = ['март', 'апрель', 'май'];
let summer = ['июнь', 'июль', 'август'];
let autumn = ['сентябрь', 'октябрь', 'ноябрь'];
let winter = ['декабрь', 'январь', 'февраль'];

let name = 'октябрь';
if(name == spring[0] || name == spring[1] || name == spring[2]){
    console.log('Весна');
} else if (name == summer[0] || name == spring[1] || name == spring[2]){
    console.log('Лето');
} else if (name == autumn[0] || name == autumn[1] || name == autumn[2]){
    console.log('Осень');
} else if(name == winter[0] || name == winter[1] || name == winter[2]){
    console.log('Зима');
}