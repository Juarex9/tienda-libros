let libros = [];
let carrito = [];
let total = 0;

const tituloInput = document.getElementById("titulo");
const precioInput = document.getElementById("precio");
const listaLibros = document.getElementById("lista-libros");
const listaCarrito = document.getElementById("carrito");
const totalElemento = document.getElementById("total");

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  agregarLibro();
});

function agregarLibro() {
  const titulo = tituloInput.value.trim();
  const precio = parseFloat(precioInput.value);

  if (!titulo || isNaN(precio) || precio <= 0) return;

  libros.push({ titulo, precio });
  tituloInput.value = '';
  precioInput.value = '';
  mostrarLibros();
}

function mostrarLibros() {
  listaLibros.innerHTML = libros.map((libro, i) => 
    `<li>
      <strong>${libro.titulo}</strong><br>
      Precio: $${libro.precio.toFixed(2)}<br>
      <button onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
    </li>`
  ).join('');
}

function agregarAlCarrito(indice) {
  carrito.push(libros[indice]);
  total += libros[indice].precio;
  mostrarCarrito();
}

function mostrarCarrito() {
  listaCarrito.innerHTML = carrito.map((item, i) => 
    `<li>
      ${item.titulo} - $${item.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${i})">Eliminar</button>
    </li>`
  ).join('');

  totalElemento.textContent = total.toFixed(2);
}

function eliminarDelCarrito(indice) {
  total -= carrito[indice].precio;
  carrito.splice(indice, 1);
  mostrarCarrito();
}