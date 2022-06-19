"use strict";
var Ejercicio2;
(function (Ejercicio2) {
    const initialArray = [1, 2, 3, 4, 5];
    console.log("Initial Array:", initialArray);
    const concat = ([...xs], [...ys]) => [...xs, ...ys];
    console.log("Concat:\t", concat(initialArray, initialArray.slice().reverse()));
})(Ejercicio2 || (Ejercicio2 = {}));
