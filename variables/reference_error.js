function foo() {

    function bar() {
        var a = 2;
    }

    try {
        console.log(object);
    }
    catch (ReferenceError) {
        console.log("Reference error");
    }
}

foo();