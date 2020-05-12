let user = {
    name: 'Andrew',
    lastName: 'Kulinich',
};

Object.defineProperty(user, 'name', {
    writable: false,
});

Object.defineProperty(user, 'lastName', {
    configurable: true,
});

Object.defineProperty(user, 'age', {
    value: 24,
    //enumerable: fallse,
});

user.name = 'Ivan';

for(let key in user){
    console.log(user[key])
}