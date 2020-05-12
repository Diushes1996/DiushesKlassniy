let obj, method;

obj = {

  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]