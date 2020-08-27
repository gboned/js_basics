function foo() {

    var a = 1;

    function bar() {

        var b = 2;

        function span() {

            var c = 3;
            console.log(a, b, c) // 1, 2, 3
        }

        span();
        console.log(a, b) // 1, 2
    }

    bar();
    console.log(a); // 1
}

foo();