function mostrarCard(productos) {
  return `<div class="card">
            <div class="img">
                <img src="${productos.imagen}" alt="${productos.descripcion}">
                <div class="desc">${productos.descripcion}</div>
                <div class="title">${productos.nombre}</div>
                <div class="box">
                    <div class="price">$${productos.precio}</div>
                    <button class="btn">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
           </div>`;
}
