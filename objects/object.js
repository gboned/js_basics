var cool_object = {
    a: "hello world",
    b: 42,
    c: true
}

console.log(cool_object.a);
console.log(cool_object.b);
console.log(cool_object.c);

console.log(cool_object["a"]);
console.log(cool_object["b"]);
console.log(cool_object["c"]);

var cool_object_2 = {
    a: "hello world",
    b: 42
}

var b = "a";

console.log(cool_object_2[b]);
console.log(cool_object_2["b"]);