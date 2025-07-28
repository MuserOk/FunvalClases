/*
let lista = document.querySelector("#listaEstudiantes"); //1ro
let titulo =document.querySelector("#titulo"); //2do
*/
/*
let estudiantes = [{ //esto simula la informacion recibida del backend
            nombre: "Kevin",
            pais: "Bolivia",
        },
        {
            nombre: "Pablo",
            pais: "Argentina",
        },
        {
            nombre: "Geraldin",
            pais: "Peru",
        },
        {
            nombre: "Gabriel",
            pais: "Argentina",
        },
        {
            nombre: "Mario",
            pais: "Argentina",
        },
    ]
    /*
    //siempre iteramos en los arrays
    for (let i = 0; i < estudiantes.length; i++) {
      lista.innerHTML += `<li>${estudiantes[i].nombre}</li>`; //si no agregamos el + se estaria sobre escribiendo solo una lista
    }
    //${  } es la sistaxis para trabajar de forma dinamica con los templates literals


    titulo.textContent = "Hola Kevin" //modificamos muchas etiquetas que dentro contiente texto
    */
/*
let contenedor = document.querySelector("#contenedor-estudiantes"); //3ro reutilisar cards predefinidas
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].pais === "Argentina") {  //4to filtrado
        contenedor.innerHTML += `
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantes[i].pais}</p>
  </a>
  `;
    }

}
*/
//---------------EJERCICIOS----------------------------------------------------
/*  Mostrar todos los productos en una lista.Cada producto debe mostrar:Nombre,Precio,Stock disponible,Botón "Comprar"*/

const productos = [
    { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
    { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
    { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
    { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];
const tabla = document.querySelector("#tabla");
tabla.innerHTML = "";

for (let index = 0; index < productos.length; index++) {
    tabla.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">${productos[index].id}</td>
            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">${productos[index].nombre}</td>
            <td class="px-6 py-4">$${productos[index].precio}</td>
            <td class="px-6 py-4">${productos[index].stock}</td>
            <td class="px-6 py-4">
                <button class="bg-green-400 px-3 py-1 rounded text-white disabled:bg-gray-400 hover:bg-green-600 disabled:opacity-50" ${productos[index].stock === 0 ? 'disabled' : ''}>
                    Comprar
                </button>
            </td>
        </tr>
      `;
}