Proyecto react - Curso Coderhouse- Comisión 31165

Este proyecto plantea la construccion de un eCommerce para el emprendimiento Indih Design enfocado basicamente en la produccion de accesorios de todo tipo 

Navegacion del sitio 
- home : ingresando a la ruta "/" o "/home" se llega a un template (todavia en desarrollo) de lo que va a ser el home de la pagina
- Productos : en este caso podemos encontrar en el menu de navegacion el apartado de productos con sus distintas categorias, para cada una de estas categorias se mostraran los productos disponibles e ingresando al detalle de cada producto se podra ver componente ItemDetail que contiene tanto la descripcion e imagenes del producto como tambien la posibilidad de agregar al carrito. Si quisieramos obtener un listado de  todos los productos sin discriminar por categoria podemos ingresar a la ruta /productos.
- CartContext : Contexto utilizado para manipular a nivel global el carrito de compra.
- Carrito de compra (icono y drawer) : en la parte superrior derecha del NavBar podemos ver el icono de un carrito que permanecera sin el badget mientras no haya items en el carrito. clickeando en el se puede abrir el CartDrawer que es una previsualizacion del carrito que nos permite realizar las siguientes acciones: 
    - Actualizar items : En el drawer hay un comando que aumenta y decrementa directamente la cantidad de items seleccionados y agregados en el CartContext.
    - Eliminar Item : Cada item agregado tendra la posibilidad de ser eliminado en su totalidad Haciendo click en el icono del tacho de basura / trash.
    - Vaciar Carrito : En la parte inferior tendremos un boton que nos permitira Vaciar el carrito completamente.
    - Finalizar compra : Este boton nos dirige al componente Cart.jsx 
- Carrito de compra (Componente) : Es el encargado de mostrar la misma información que el Cart y ademas otorgar la posibilidad al cliente de que complete todos los datos correspondientes a la facturacion, entrega y pago(proximo a desarrollar). 
