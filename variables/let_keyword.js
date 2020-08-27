function foo() {

    var a = 1; // Valor inicial de a

    if (a >= 1) {
        let b = 2; // a es igual a 1, así
                   // que b es igual a 2

        while (b < 5) {
            let c = b * 2; // c = 4 // 6 // 8
            b++; // 2 + 1 // 3 + 1 // 4 + 1

            console.log( a + c ); // 5, 7, 9
        }
    }
}

foo();