// Suplí la li por una Array
// cambie la dirección pues agregue la carpeta assets
const productos = [ 
  {nombre: "Zapatilla negra", tipo: "zapatilla", color: "negro", img:"./assets/taco-negro.jpg"},
  {nombre: "Zapatilla azul", tipo: "zapatilla", color: "azul", img:"./assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img:"./assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img:"./assets/bota-azul.jpg"},
  {nombre: "Zapatilla roja", tipo: "zapatilla", color: "rojo", img:"./assets/zapato-rojo.jpg"}
]

// Quite la const li, para poner referencias a los elementos HTML
const inputBusqueda = document.getElementById('busqueda');
const btnFiltrar = document.getElementById('btn-filtrar');
const listaProductos = document.getElementById('lista-de-productos');

// Quite el ciclo for, para cambiarlo por la funcion mostrar productos
function mostrarProductos(productos) {
  listaProductos.innerHTML = ''; // Limpiar lista

  productos.forEach(producto => {
    const item = document.createElement('div');
    item.classList.add('producto'); // Agregar clase para aplicar estilo
    
    const img = document.createElement('img');
    img.src = producto.img;
    img.alt = producto.nombre;

    const texto = document.createElement('p');
    texto.textContent = `${producto.nombre} - Tipo: ${producto.tipo} - Color: ${producto.color}`;

    item.appendChild(img);
    item.appendChild(texto);
    listaProductos.appendChild(item);
  });
}
//Para filtrar los productos acorde a los filtros, quite el displat productos, quite el ciclo while y for para hacerlo más sencillo
function filtrarProductos() {
  const texto = inputBusqueda.value.toLowerCase(); // Convertir a minúsculas para mejor comparación
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(texto) ||
    producto.color.toLowerCase().includes(texto) ||
    producto.tipo.toLowerCase().includes(texto) // Agrega tipo al filtro
  );
  mostrarProductos(productosFiltrados); // Mostrar resultados
}

//Para sincronizar el filtro y el botón del html use lo siguente
btnFiltrar.addEventListener('click', filtrarProductos);
inputBusqueda.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    filtrarProductos();
  }
});

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);