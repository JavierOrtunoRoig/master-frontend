namespace Ejercicio2 {

  const initialArray = [1, 2, 3, 4, 5];
  console.log("Initial Array:\t\t", initialArray);

  const head = ([x, ]: number[]) => x;
  console.log("Head:\t\t\t", head(initialArray));

  const tail = ([, ...xs]: number[]) => xs;
  console.log("Tail:\t\t\t", tail(initialArray));

  const init1 = ([...value]: number[]) => value.slice(0, value.length - 1);
  const init2 = ([...array]: number[]) => array.filter((value, index) => index < array.length - 1);
  console.log("Init with slice:\t", init1(initialArray));
  console.log("Init with filter:\t", init2(initialArray));

  const last = ([...xs]: number[]) => xs.slice(-1)[0];
  console.log("Last:\t\t\t", last(initialArray));
  
}