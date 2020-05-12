
const ryn = inArray([2, 3, 4], 2);

function inArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) return true;
    };
    return false;
}
function createRand(randLength, min, max) {
    let randArray = [],
        i = 0;
    if (randLength > (max - min + 1)) {
        return null;
    }
    while (i < randLength) {
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!(inArray(randArray, rand))) {
            i++;
            //randArray.unshift(rand);
            randArray.push(rand);
        }
    };
    return randArray;

}
const arr = createRand(4, 1, 9);
console.log(arr);
