//Написать ф-цию которая принимает 2 массива и возвращает новый массив состоящий из значений 1го переданного массива не встречающегося во втором массиве [2,3,5],[3,7,9] -> [2,5]

const arr1 = [2, 3, 5];
const arr2 = [3, 7, 9];
const arr3 = [];

const conversion = () => {
    for (let i = 0; i < arr1.length; i++) {
        let number = arr1[i];

        for (let a = 0; a < arr2.length; a++) {
            if (number !== arr2[a]) {
                arr3.push(number)
            }
        }
    }
}

conversion();
console.log(arr3);