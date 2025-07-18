const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 

//📢 Recorre el array de productos y 
// muestra en la consola el nombre y el precio de cada uno.
productos.forEach(productos => 
    console.log(`Nombre: ${productos.nombre}, Precio: $${productos.precio}`));

//✅ Parte 1: Usa map para generar un array productosDisponibles 
// que contenga solo los nombres de los productos a partir del array
//  productos. 
const productosDisponibles = productos.map(productos => {
    return{
        nombre:productos.nombre,
    };
});
//🔎 Parte 2: Luego, verifica si un producto buscado
//  está disponible utilizando includes.
const busquedaProd ="Webcam";
const productoEncontrado = productos.filter(productos=>{
    return productos.nombre.toLowerCase().includes(busquedaProd.toLowerCase());
});
if (productoEncontrado.length > 0) {
    console.log(`\nSe encontraron ${productoEncontrado.length} productos que incluyen "${busquedaProd}":`);
} else {
    console.log(`\nNo se encontró ningún producto que incluya "${busquedaProd}".`);
}

//💰 Crea un nuevo array con los productos, aplicando un 10% de descuento a los precios.
const descuentos = productos.map(productos => {
    return{
        nombre:productos.nombre,
        descuento: (productos.precio*0.90),
    };
});
console.log(descuentos);

//🎯 Crea un array con los productos cuyo precio sea menor a $100.

//TERMINAR