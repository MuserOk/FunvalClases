alert("Bienvenido al Banco La Plaza");
 let usuario1 = "12345678";
 let clave1 = 4321;
 let saldo1 = 80950;

let dniUsuario;
let claveUsuario;
let opcionValida = false;

function operar(a, b) {
    if (a === "+") {
        saldo1 += b;
    }else{                 //si la operacion es retirar
        if (b > saldo1){   // verifico si tiene saldo
            alert("El monto ingresado excede a saldo de tu cuanta")
        }else{
            saldo1 -= b;
            alert("Operacion realizada exitosamente")
        }
    }
}

const MAX_INTENTOS = 3;
let credencialesCorrectas = false;

for (let intento = 1; intento <= MAX_INTENTOS && !credencialesCorrectas; intento++) {
  dniUsuario = prompt("Intento " + intento + " de " + MAX_INTENTOS + "\nIngrese DNI (8 dígitos)\n[0000 para salir]:");
  
  if (dniUsuario === "0000") {
    alert("Operación cancelada por el usuario");
    break;
  }
  
  claveUsuario = prompt("Intento " + intento + " de " + MAX_INTENTOS + "\nIngrese Clave (4 dígitos)\n[0000 para salir]:");
  
  if (claveUsuario === "0000") {
    alert("Operación cancelada por el usuario");
    break;
  }
  
  if (dniUsuario === "12345678" && claveUsuario === "4321") {
    credencialesCorrectas = true;
    alert("Acceso concedido. Bienvenido!");
  } else {
    const intentosRestantes = MAX_INTENTOS - intento;
    alert("Credenciales incorrectas. " + (intentosRestantes > 0 ? "Intentos restantes: " + intentosRestantes : "Acceso bloqueado"));
  }
}

if (!credencialesCorrectas && dniUsuario !== "0000" && claveUsuario !== "0000") {
  alert("Sistema bloqueado. Contacte al administrador");
}

if (dniUsuario !== "0000"){
    alert("Datos validados exitosamente");

do {
    menuOperaciones = parseInt(prompt("Seleccione la operacion que desees realizar:\n1) Ingresar dinero \n2) Retirar dinero\n3) Consultar saldo\n4) Salir"));
    
    if (menuOperaciones >= 1 && menuOperaciones <= 3) { 
        
        switch(menuOperaciones) {
            case 1:
                let ingresoDinero = (parseInt(prompt("Ingrese la cantidad a depositar")));
                operar("+", ingresoDinero);
                alert("Operacion realizada exitosamente")
                break;
            case 2:
                let retiroDinero = (parseInt(prompt("Ingrese la cantidad a retirar")))
                operar("-", retiroDinero);
                break;
            case 3:
                alert("Tu saldo actual es: "+ saldo1);
                break;
        }
    } else if (menuOperaciones === 4){
        opcionValida=true;   
    } else {
        alert("Opción inválida. Por favor, ingresa un número entre 1 y 3 si desea operar, ó 4, si desea abandona la operacion");
    }
    
}while (!opcionValida);
}

alert("Gracias por usar nuestros servicios.")

