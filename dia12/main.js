let permisoMama = false;
let permisoPapa = false;

edad = 65;


if ((edad >= 18) && (permisoMama || permisoPapa)) {
    console.log("puedo salir a bailar");
} else {
  console.log("me quedo en casa");
}
/*EVALUAR TODAS LAS POSIBLES CONDICIONES*/


/* el usuario va ingresar su fecha de nacimiento dia el mes y el año ustedes deberan decirle cuantos dias tiene de vida
nacio el 1 de julio de 2025 vivio 15 dias ustedes deberan tener en cuenta años bisiestos y febrero 
*/

let diaNac = 10;
let mesNac = 7;
let añoNac = 2025;

let añoActual =2025;
let mesActual= 7;

//Si es bisiesto si se puede dividir por 4 --- si es decimal
if (((año/4)%1) < 1){
    diasAño = ((añoActual-año))
}

/*
totalDias = [dia de nacimieto + (mes actual - 1)] + ((año actual - año de nacimiento) - años bisiestos)

caso del mes: de enero a diciembre

cuenta cantidad años bisisetos entre los años que pasaron.
*/



