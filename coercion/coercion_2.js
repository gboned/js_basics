function foo(a) {

    if (a) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

var a = "";
foo(a);

a = 0;
foo(a);

a = -0;
foo(a);

a = NaN;
foo(a);

a = null;
foo(a);

a = undefined;
foo(a);

a = false;
foo(a);

a = "hello";
foo(a);

a = 42;
foo(a);

a = true;
foo(a);

a = [];
foo(a);

a = [1, "2", 3];
foo(a);

a = {};
foo(a);

a = {x: 42};
foo(a);

a = foo;
foo(a);
