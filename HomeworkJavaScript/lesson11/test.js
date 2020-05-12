const arr = [0, 1, 5];

arr.forEach((el) => console.log(el));

/*function addOne(a) {
    return (a + 1)
}*/

const addOne = (el, index, array) => {
    console.log('addOne -> array', array);
    console.log('addOne -> index', index);
    console.log('addOne -> el', el);
    
    if (index === arr.length - 1) {
        return el;
    } else {
        return el + arr[index + 1]
    }
    
}

const newArr = arr.map(addOne);
console.log('newArr', newArr);