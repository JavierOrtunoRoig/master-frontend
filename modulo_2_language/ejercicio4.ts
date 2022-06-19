namespace Ejercicio4 {
  
  interface book {
    title: string;
    isRead: boolean;
  }

  const books: book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  // Añadir typeScript
  const isBookRead = (array: book[], title: string) => !!array.find((value) => value.title === title && value.isRead);

  console.log('¿El libro "Devastación" está acabado?', isBookRead(books, "Devastación")); // true
  console.log('¿El libro "Canción de hielo y fuego" está acabado?', isBookRead(books, "Canción de hielo y fuego")); // false
  console.log('¿El libro "Los Pilares de la Tierra" está acabado?', isBookRead(books, "Los Pilares de la Tierra")); // false

}
