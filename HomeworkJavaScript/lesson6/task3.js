let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 100))
}

const replace = /0/;
let newArr = arr.map(item => {
    return item.toString().replace(replace, 'zero')
})
console.log(newArr);