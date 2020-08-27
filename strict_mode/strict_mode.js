function foo() {
    "use strict";
    a = 1;
}

try {
    foo();
}

catch (ReferenceError) {
    console.log("Reference error")
}