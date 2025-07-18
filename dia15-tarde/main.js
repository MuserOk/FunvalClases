/*
let estudiantes = [
  {
    nombre: "kevin",
    pais: "Bolivia",
  },
  {
    nombre: "Pablo",
    pais: "Argentina",
  },
  {
    nombre: "Geraldine",
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
];

let contenedor = document.querySelector("#contenedor-estudiantes");
for (let i = 0; i < estudiantes.length; i++) {
     if (estudiantes[i].pais === "Argentina") {
        contenedor.innerHTML +=` 
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantes[i].pais}</p>
            </a>
        `;
    }
}
*/

const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];
/*  Mostrar todos los productos en una lista.
Cada producto debe mostrar:
Nombre
Precio
Stock disponible
Botón "Comprar"*/

let contenedor = document.querySelector("#contenedor-helados");
for (let i = 0; i < productos.length; i++) {
contenedor.innerHTML +=` 
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="" alt="helado de vainilla">

        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${productos[i].nombre}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Precio: ${productos[i].precio}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">Stock: ${productos[i].stock}</p>
            <button class="bg-gray-500 text-white py-2 px-4 rounded-2xl">Comprar</button>
        </div>
    </a>
        `;

}

//<img src="" alt=""></img>
//VAINILLA:    https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chedraui.com.mx%2Fhelado-nestle-vainilla-1l-3763276%2Fp&psig=AOvVaw1HW9pBxxXZP_-k3Xxb5eLg&ust=1752958596341000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjr--XkpceOAxVLV7gEHeasKw4QjRx6BAgAEBo
// CHOCOLATE:    https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fhelado-nestle-chocolate-1l%2Fp%2FMLA26215931&psig=AOvVaw3gUz6SYz6GyU-hQgoocZeb&ust=1752958629206000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiW8Lv0pceOAxUSS7gEHW04CXEQjRx6BAgAEBo
// FRESSA:        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fhelado-nestle-fresa-1l%2Fp%2FMLA26215924&psig=AOvVaw1NEqXQIPT1N5rcibuEmcQK&ust=1752958642420000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjptuL6pceOAxXzu5UCHc5qNpwQjRx6BAgAEBo
//LIMON:         https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fhelado-nestle-limon-986g%2Fp%2FMLA18980490&psig=AOvVaw2XHh9l4OOJ_IbJDDPQtQlZ&ust=1752961320446000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwihleD3r8eOAxX3V7gEHSRSMeAQjRx6BAgAEBo