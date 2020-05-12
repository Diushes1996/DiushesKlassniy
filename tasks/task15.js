let say = 'abvba';
//console.log(say.length);

isPolindrom(say);
function isPolindrom (str){
    if(str[0] === str[say.length - 1] && str[1] === str[say.length - 2]){
        return true
    }
    return false
    //return str[0] === str[say.length - 1] && str[1] === str[say.length - 2];
} 

console.log(isPolindrom(say));


//Дорешать