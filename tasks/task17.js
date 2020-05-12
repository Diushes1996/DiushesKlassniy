//аписать ф-цию которая принимает массив и возвращает новый массив состоящий только из уникальных значений входного [2,3,3,5,1,2,3,4] -> [2,3,5,1,4]

function unique(arr) {
    let result = [];

    for (let i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }

    return result;
}

let arr = [2, 3, 3, 5, 1, 2, 3, 4];

console.log(unique(arr));
