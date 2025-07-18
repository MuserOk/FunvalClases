/* MOSTRAR ELEMENTOS EN CONSOLA */
console.log("hola mundo");
/* CREACION O DECLARACION DE VARIABLES */

let nombreVariable = "el valor asociado"; /* alcance en bloque */
var nombreVar = "el valor"; /* NO SE USA ALCANCE GLOBAL*/

const nombreConst = "el valor de la constante";

/* FORMAS CORRECTAS DE CREAR VARIABLES */

/* let 2variable */
/* let #variable */
/* let $nombrevar = 1;
let _contador = 322;
let nombre;
let apellidoPaterno; */

/* TIPOS DE DATOS PRIMITIVOS */
/* String */
let nombre = "Kevin";
let NOMBRE = "Andrew";
let apellidos = `Rodriguez`;
/* Numerico */
let edades=28;
/* Booleano */
let masculino = true;
let miembro = true;
/* caracter q en js es lo mismo q String */
let caracter = "k";
/* Undefined */
let aprobado;
/* Null */
let reprobado = null;
/* Big int */
let numeroGrande = 2138762349843560439682873123123132n;
let grandeeeee = BigInt("1273123789127398123");
/* Simbolo */
let simbolo = Symbol("kevin");
/* uso de Strings */
let cantidad = nombre.length;
console.log(cantidad);
/* VERIFICAR EL TIPO DE DATO  DE UNA VARIABLE */
console.log(typeof simbolo);

/* OPERADORES */
let a = 2;
let b = 7;
let estudiante = "Geraldine";
let apellidoEstudiante = "Revilla";
let NombreCompleto;
let resultado;
/* Suma */
resultado = a + b;
NombreCompleto = estudiante + " " + apellidoEstudiante; /* Concatenacion */
//console.log(NombreCompleto);
/* Resta */
resultado = a - b;
/* divison */
resultado = a / b;
/* multiplicacion */
resultado = a * b;
/* Potencia */
resultado = a ** b;
/* Modulo */
resultado = a % b;

/* OPERADORES DE COMPARACION dato IMPORTANTE EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO */
let comparacion;
comparacion = a != b; //verifica q sean diferentes
comparacion = a !== b; //verifica q sean diferentes pero tambien diferentes en el tipo de dato
comparacion = a == b; // verifica si es valor es igual sin ver el tipo d dato
comparacion = a === b; // verifica tambien el tipo de dato deben ser del mismo tipo de dato primitivo
comparacion = a > b;
comparacion = a < b;
comparacion = a <= b;
comparacion = a >= b;

/* OPERADORES LOGICOS EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO*/
/* AND &&*/
a = 2;
b = 7;
let logico;
logico = a <= b && a <= b; //true5   false1
/* OR || */
logico = a === b || a >= b; //false
/* NOT */
logico = !(a === b);
console.log(logico);
/* conecptos basicos */
// 1. Escribe un comentario en una línea
//este es un comentario de linea 


// 2. Escribe un comentario en varias líneas
/* este es un 
comentario de varias 
lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombreMio = "Mario";
let miEdad = 35;
let soyEstudiante = true;

// 4. Imprime por consola el valor de todas las variables
console.log(nombreMio);
console.log(miEdad);
console.log(soyEstudiante);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombreMio);
console.log(typeof miEdad);
console.log(soyEstudiante);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombreMio = "Israel"
miEdad = 21;
soyEstudiante = false;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombreMio = 21;
miEdad = "super";
soyEstudiante = "53"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
/*
const dni = 12345678; //"12345678" ???
const padre = "Oscar";
const v = true;

// 9. A continuación, modifica los valores de las constantes
const dni = 9876543;
const padre = "carlos"
const v = false;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//las constantes no se puede modificar una vez que se crean.
const dni = null; 
*/

/*OPERADORES LOGICOS  */
let cuentas = 2;
//cuenta ++; //cuenta = cuenta + 1;

/* operadores de asignacion */
let cuenta = 2;
cuenta++; /* cuenta =cuenta +1 */
cuenta--; /* cuenta = cuenta -1 */
cuenta + 5; /* cuenta = cuenta +5 */
cuenta - 7; /* cuenta = cuenta -7 */
cuenta * 2; /* cuenta = cuenta *2 */
cuenta / 6; /* cuenta =cuenta /6 */

/* Operador ternario  */
a = 2;
b = 7;
a > b
  ? console.log("a es mayor q b")
  : console.log(
      "b es mayor q a"
    ); /* IF abreviado o condicional de una sola linea */

/* 
    condicion?
    codigo a ejecutarse si la condicion es verdadera
    :codigo a ejecutarse si la condicion es falsa

*/

/*OPERADORES LOGICOS  */

// 1. Crea una variable para cada operación aritmética
let x = 1 + 3;
let y = 5 - 2;
let z = 5 * 1;
let w = 10 / 2;
let s = 24 % 2;
let r = 2 ** 2;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asigX = y;
asigX ++;
asigX --; 
asigX + 5; 
asigX - 3; 
asigX * 3; 
asigX / 2; 
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(z > y);
console.log(r == x);
console.log(x < y)
console.log(w > s)
console.log( )
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas




//el 0 y "", null, undefine se toman como falso.
let usuario = "admin";
let password = "123456";

   

    (usuario === "admin" && password === "123456")
    ? console.log("Datos correctos")
        :(usuario !== "admin" && password !== "123456")
        ? console.log("ambos incorecto")
        :(usuario !== "admin")
        ? console.log("usuario incorrecto")
        :console.log("password incorrecto");

/*Mayor de edad*/
const minEdad=18;

let edad = 35;

(edad >= minEdad)
    ?console.log("Adelante, podes pasar."+" Sos mayor de edad.")
    :console.log("Sos menor de edaed, no podes pasar");
    
/*Nivel de ususario*/
let puntos = 150;

(puntos < 100)
? console.log("Nivel Principiante")
: (puntos >=100  && puntos < 500)
? console.log("Nivel Intermedio")
: console.log("Nivel Avanzado");

/*Dia de la semana*/
let dia =2;

    (dia === 1 && dia <=7)
    ? console.log(" Hoy es Lunes")
    : (dia === 2)
    ? console.log("Hoy es Martes")
    : (dia === 3)
    ? console.log("Hoy es Miercoles")
    : (dia === 4)
    ? console.log("Hoy es Jueves")
    : (dia === 5)
    ? console.log("Hoy es Viernes")
    : (dia === 6)
    ? console.log("Hoy es Sábado")
    : console.log("Hoy es domingo");

/*Calculadora simple*/

let num1 = 10;
let num2 = 5;
let operador = "%";

(operador === "+")
? console.log(num1 + num2)
: (operador === "-")
? console.log(num1 - num2)
: (operador === "*")
? console.log(num1 * num2)
: (operador === "/")
? console.log(num1 / num2)
: console.log("operador invalido");






        


