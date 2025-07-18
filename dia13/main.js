/* tenemos q validar si la palabra o numero q ingrese el cliente es o no una palabra palindrome
    123321  ===    123321
    reconocer
    yohagoyogahoy === yohagoyogahoy
    kevin rodriguez
    kevinrodriguez
*/
/* 
    1er paso seria pedirle al usuario q ingrese la palabra o numero
    crear una funcion q reciba una palabra y la devuelva sin espacios
    crear una funcion q reciba una palabra y me la retorne toda en minisculas
    crear una funcion q reciba una palabra y la invierta y compare si son iguales y retorne true o false
    crear una funcion q le muestre al cliente si su palabra es o no palindrome
*/
/*
Expresión	¿Qué hace?
/\s/	Coincide con el primer espacio o tab/salto
/\s+/	Coincide con el primer grupo de uno o más espacios/tab/salto
/\s/g	Reemplaza cada espacio/tab/salto individualmente en toda la cadena
/\s+/g	Reemplaza cada grupo continuo de espacios/tab/salto

let datoUsuario = prompt("ingresa tu palabra");

let respuesta = sinEspacios(datoUsuario);
respuesta = minusculas(respuesta);
respuesta = invertir(respuesta);
console.log(retornaResultado(respuesta));

function sinEspacios(palabra) {
  let resultado = "";
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] !== " ") {
      resultado = resultado + palabra[i];
    }
  }
  return resultado;
}

function minusculas(palabra) {
  palabra = palabra.toLowerCase();
  return palabra;
}

function invertir(palabra) {
  let resultado = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    resultado = resultado + palabra[i];
  }
  if (resultado === palabra) {
    return true;
  } else {
    return false;
  }
}

function retornaResultado(booleano) {
  let respuesta;
  if (booleano) {
    respuesta = "tu palabra es palindrome";
  } else {
    respuesta = "tu palabra no es palindrome";
  }
  return respuesta;
}


  GENERAR LA SERIE DE LOS NUMEROS PRIMOS ESTA SERIE SE CARACTERIZA X Q UN NUMERO PRIMO ES AQUEL
  Q SOLO ES DIVISIBLE ENTRE 1 Y EL MISMO DE LA CANTIDAD N Q INGRESE EL CLIENTE
  N=6
  2,3,5,7,11,13
  N=2
  2,3
  N=5
  2,3,5,7,11
  ahora deberan realizarlo con fUNCIONES

let numero = parseInt(prompt("ingresa un numero"))

if (numero % 2 === 0 || numero % 3 === 0) {
    console.log("No es primo"); // si se divide entre 2 o 3
}
*/

/*
Requerimientos del Restaurante "Don Baraton"
El restaurante necesita un sistema simple que permita:

Mostrar el menú del día (máximo 5 platos, sin usar arrays).

Permitir que un cliente realice varios pedidos (repetir mientras desee).


function menu(){} //que tiene que recibir lista de numero
function calcularPrecio() {
    
}//agrego cada pedido

function pedido(){
    let termino = "si";
    do{
        let numNuevoPedido = parseInt(prompt("Por favor, seleccione el numero del siguiente menú"+ obtenerMenu()))
        calcularPrecio(numNuevoPedido);
        termino = prompt("Desea hacer otro pedido? (si  ó  no)")
    }while (termino === "si");
}


Calcular el precio según el plato elegido.

Solicitar el nombre del cliente.

Mostrar una factura final con el total a pagar por todos los platos.

Opciones adicionales (bonus):
(+5 PTS) Aplicar descuento del 5% si el total supera los $120.

(+5 PTS) Mostrar un mensaje especial si el cliente eligió "Tacos".

(HTML +10 PTS) Implementación con HTML.

El sistema debe ser simple y cumplir con los requisitos básicos, con opciones para ganar puntos extras mediante funcionalidades adicionales.
*/

//TARDE

/* 
  REALIZAR UNA CALCULADORA CON UN MENU
  MULTIPLICAR
  SUMAR
  RESTAR
  DIVIDIR
  2 NUMEROS
  vamos a crear arrowfunction para cada operacion y hacer uso de ellas 
*/

// Definición de operaciones con arrow functions
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

// Función para mostrar menú
const mostrarMenu = () => {
  return prompt(`CALCULADORA:
  1. Sumar
  2. Restar
  3. Multiplicar
  4. Dividir
  5. Salir
  Elija una opción:`);
};

// Función principal
const calculadora = () => {
  let continuar = true;
  
  while (continuar) {
    const opcion = mostrarMenu();

    if (opcion === "5") {
      alert("¡Hasta luego!");
      continuar = false;
      continue;
    }

    if (!["1", "2", "3", "4"].includes(opcion)) {
      alert("Opción inválida");
      continue;
    }

    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
      alert("Debe ingresar números válidos");
      continue;
    }

    let resultado;
    let operacion;
    
    switch (opcion) {
      case "1":
        resultado = sumar(num1, num2);
        operacion = "+";
        break;
      case "2":
        resultado = restar(num1, num2);
        operacion = "-";
        break;
      case "3":
        resultado = multiplicar(num1, num2);
        operacion = "*";
        break;
      case "4":
        resultado = dividir(num1, num2);
        operacion = "/";
        break;
    }

    alert(`Resultado: ${num1} ${operacion} ${num2} = ${resultado}`);
  }
};

// Iniciar calculadora
calculadora();