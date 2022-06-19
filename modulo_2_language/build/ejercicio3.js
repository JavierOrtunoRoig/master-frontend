"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Ejercicio3;
(function (Ejercicio3) {
    const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
    const b = { name: "Luisa", age: 31, married: true };
    const clone = (_a) => {
        var source = __rest(_a, []);
        return source;
    };
    console.log("Es el objeto original el mismo que el clon:", a === clone(a));
    const merge = (source, target) => (Object.assign(Object.assign({}, target), source));
    console.log("Merge:", merge(a, b));
})(Ejercicio3 || (Ejercicio3 = {}));
