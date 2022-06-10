# Ejercicios básicos módulo 1 - Layout

En este directorio se encuentran los ejercicios básicos del primer módulo de la XII Edición de máster.

La forma de ver los resultados de los ejercicios diferirá dependiendo de los requisitos del mismo. Para uno de ellos se ha hecho uso de Sass, en dicho ejercicio viene explicada la forma de compilar y ejecutar el código. Para el resto de los ejercicios se ha usado css vanilla, por tanto es más fácil de ver el resultado del ejercicio, simplemente hace falta abrir el archivo index.html del ejercicio que se quiera visualizar.

## Ejercicio 1

Para la resolución de este ejercicio se ha usado Sass. Para poder compilar y correr la aplicación se ha hecho uso de *parcel*. Se ha instalado parcel-bundler con el comando:

```console
$ npm i -g parcel-bundler
```

y para compilar hace falta entrar en la carpeta del ejercicio y ejecutar parcel:

```console
$ cd ejercicio1
$ parcel index.html
```

## Ejercicio 2

Se ha usado flexbox para centrar los elementos en la pantalla. Se parte de un archivo *index.css*, en el que se encuentran los estilos necesarios para centrar los elementos. En dicho archivo se puede importar otros dos archivos *.css*, estos son *left.css* y *right.css*, dependiendo de cual importemos conseguiremos que los elementos tengan los estilos de la parte izquierda o derecha del ejemplo del enunciado.

* Para conseguir el tema A (izquierdo) del ejemplo, hay que acceder a index.css y dejar los imports de la siguiente manera:
```css
@import 'left.css';
/* @import 'right.css'; */
```

* Para conseguir el tema B (derecho) del ejemplo, hay que acceder a index.css y dejar los imports de la siguiente manera
```css
/* @import 'left.css'; */
@import 'right.css';
```

## Ejercicio 3

Se ha hecho uso de flexbox y media queries para conseguir un menú responsivo.

## Ejercicio 4

Se ha usado CSS Grid para crear un Card como la del ejemplo del enunciado y se ha hecho uso del flexbox para centrar dicha Card.
