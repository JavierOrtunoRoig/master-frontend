"use strict";
var Ejercicio2;
(function (Ejercicio2) {
    const initialArray = [1, 2, 3, 4, 5];
    console.log("Initial Array:\t\t", initialArray);
    const head = ([x,]) => x;
    console.log("Head:\t\t\t", head(initialArray));
    const tail = ([, ...xs]) => xs;
    console.log("Tail:\t\t\t", tail(initialArray));
    const init1 = ([...value]) => value.slice(value.length - 1);
    const init2 = ([...array]) => array.filter((value, index) => index < array.length - 1);
    console.log("Init with slice:\t", init1(initialArray));
    console.log("Init with filter:\t", init2(initialArray));
    const last = ([...xs]) => xs.slice(-1);
    console.log("Init with filter:\t", last(initialArray));
})(Ejercicio2 || (Ejercicio2 = {}));
