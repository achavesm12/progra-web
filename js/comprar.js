let carrito = [];
let descuentoAplicado = false;

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    calcularTotalConDescuento();
    calcularTotalConIVA();
    actualizarCarrito();
}
function Cancelar() {
    carrito = [];
    descuentoAplicado = false;
    actualizarCarrito();
}

function aplicarDescuento() {
    if (carrito.length >= 4 && !descuentoAplicado) {
        // Aplicar un descuento del 7% después de 4 productos
        carrito.forEach(producto => {
            producto.precio *= 0.93; // Aplica el descuento del 7%
        });
        descuentoAplicado = true;
    }
}

function calcularTotalConDescuento() {
    let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    aplicarDescuento(); // Aplicar descuento antes de calcular el total
    return total;
}

function calcularTotalConIVA() {
    let total = calcularTotalConDescuento();
    // Agregar IVA del 5%
    total *= 1.05;
    return total.toFixed(2);
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - ₡${formatoMoneda(producto.precio)}`;
        listaCarrito.appendChild(listItem);
        total += producto.precio;
    });

    total = calcularTotalConIVA(); // Recalcular el total con descuento e IVA después de agregar productos
    totalElemento.textContent = `${formatoMoneda(total)}`;
}

function formatoMoneda(monto) {
    return parseFloat(monto).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' }).replace('₡', '');
}

function hacerpedido() {
    // Aquí puedes implementar la lógica para el proceso de pago, como recopilar información del usuario y redirigir a una página de pago.
    alert('El pedido fue realizado. Total: ₡' + formatoMoneda(calcularTotalConIVA()));
    // Puedes redirigir a la página de pago o realizar otras acciones según tu lógica de negocio.
    Cancelar();
}

function eliminarUltimoProducto() {
    if (carrito.length > 0) {
        carrito.pop(); // Elimina el último elemento del array
        descuentoAplicado = false; // Reinicia el flag de descuento al quitar un producto
        actualizarCarrito();
    }
}

// Manejar el evento keyup en el campo de búsqueda
$("#searchInput").on("keyup", function () {
    // Obtener el texto de búsqueda
    var searchText = $(this).val().toLowerCase();

    // Ocultar todos los productos
    $(".producto").hide();

    // Filtrar productos que coincidan con el texto de búsqueda
    $(".producto").each(function () {
        var productoNombre = $(this).find("h5").text().toLowerCase();

        if (productoNombre.includes(searchText)) {
            $(this).show();
        }
    });
});
