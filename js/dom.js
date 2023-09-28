const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = '';
    productosElegidos.forEach(producto => {contenedorProductos.innerHTML += mostrarCard(producto)});
}
cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.target.classList.add("active");

        if (e.target.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.target.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre.toUpperCase();
            const productosBoton = productos.filter(producto => producto.categoria.id === e.target.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos".toUpperCase();
            cargarProductos(productos);
        }

    })
});