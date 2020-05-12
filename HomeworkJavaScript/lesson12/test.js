let promise = new Promise (function(resolve, reject) {
setTimeout(() => reject ('Hello'), 4000);

})
console.log(promise);

/*promise.then(function(a){
    console.log(a);
});*/

promise.catch(function(a){
    console.log(a);
});