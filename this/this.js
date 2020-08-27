function foo() {
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "object1",
    foo: foo
};

var object2 = {
    bar: "object2"
};

foo();
obj1.foo();
foo.call(object2);
new foo();