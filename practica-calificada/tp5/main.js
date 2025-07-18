


//Menu y seleccion de operaciones

let opcionMenu;
let opcionValida = false;

do {
    opcionMenu = parseInt(prompt("Hola! Por favor, ingresa el número correspondiente de la tarea a realizar:\n1) Calcular el área de un cuadrado\n2) Calcular el área de un rectángulo\n3) Calcular el área de un triángulo"));
    
    if (opcionMenu >= 1 && opcionMenu <= 3) {
        opcionValida = true;
        
        switch(opcionMenu) {
            case 1:
                let ladoC = parseInt(prompt("Por favor, ingresa la medida de un lado"));
                console.log("El área del cuadrado con lado ", ladoC, " es: ", (ladoC * ladoC));
                break;
            case 2:
                let baseR = parseInt(prompt("Por favor, ingresa la medida de la base"));
                let alturaR = parseInt(prompt("Por favor, ingresa la medida de la altura"));
                console.log("El área del rectángulo con base ", baseR, " y altura ", alturaR, " es: ", (baseR * alturaR));
                break;
            case 3:
                let baseT = parseInt(prompt("Por favor, ingresa la medida de la base"));
                let alturaT = parseInt(prompt("Por favor, ingresa la medida de la altura"));
                console.log("El área del triángulo con base ", baseT, " y altura ", alturaT, " es: ", ((baseT * alturaT) / 2));
                break;
        }
    } else {
        alert("Opción inválida. Por favor, ingresa un número entre 1 y 3.");
    }
} while (!opcionValida);
