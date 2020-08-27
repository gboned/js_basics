var a = "42";
var b = 42;

console.log(a == b);
console.log(a === b);

var c = [1, 2, 3];
var d = [1, 2, 3];
var e = "1, 2, 3";

var f = c;

console.log(c == d);
console.log(c == e);
console.log(d == e);

console.log(c == f);