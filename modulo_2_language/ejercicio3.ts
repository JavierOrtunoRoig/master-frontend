namespace Ejercicio3 {

  interface Person {
    name: string;
    age?: number;
    married?: boolean;
    surname?: string;
    country?: string;
  }

  const a: Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
  const b: Person = { name: "Luisa", age: 31, married: true };

  const clone = ({...source}) => source;
  console.log("Es el objeto original el mismo que el clon:", a === clone(a));

  const merge = (source: Person, target: Person) => ({ ...target, ...source});
  console.log("Merge:", merge(a, b));

}
