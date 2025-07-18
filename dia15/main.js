/* las notas de un estudiante de funval estn dentro de un array
ejemplo
let notas =[32,100,25,78]
let notas =[32,100,10,8,0]
let notas =[32]
let notas =[32,77]
realizar una funcion q reciba un array y nos retorne el promedio de las notas de un estudiante :D
*/
/*
let suma=(a,b) => a+b;
let promedio=(a,b) => a/b;
let c=0;
let largo=0;

function leerArreglo(notas) { 
    for (let index = 0; index < notas.length; index++) {
        suma(c+=[index])
    }
    
    largo = nuevoArray.length;
}

let notas = [7,8,9,4,3,3];
//TERMINAR
*/


/*
//realizar la suma y mostrar el total de la DIAGONAL PRINCIPAL. 
//con solo un FOR.
let matriz = [
    [28,34,45],
    [34,56,5],
    [45,2,6,],
];
let suma;

for (let index = 0; index < matriz.length; index++) {
    suma=[index].shift+index;
}
console.log(suma);

//EJERCICIO: ENCONTRAR LA DIAGONAL SECUNDARIA
*/

let estudiante = {
  nombre: "kevin",
  edad: 28,
  nacionalidad: "Bolivia",
  esMiembro: true,
  numeroCuenta: 12345667897892344n,
};
/* como accedemos a valores dentro de los objetos */

estudiante.nacionalidad = "Chile";
/* como creamos llaves nuevas */
estudiante.genero = "Masculino";

/* --------------------------------- */
let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];
/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts */
/*
for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}
*/
/* mostrar a todos los estudiantes q sean de Argentina */

function estudiantesDeArgentina(estudiantes) {
    const estudiantesArgentina = []; 
    for (let i = 0; i < estudiantes.length; i++) {
        const estudianteActual = estudiantes[i];
        if (estudianteActual.nacionalidad === "Argentina") {
            estudiantesArgentina.push(estudianteActual); 
        }
    }
    return estudiantesArgentina;
}

// Llamamos a la función y mostramos el resultado
const argentinosFor = obtenerEstudiantesDeArgentinaConFor(listaEstudiantes);
console.log("Estudiantes de Argentina (usando for):");
console.log(argentinosFor);