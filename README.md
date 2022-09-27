# Mi primer proyecto en git

Proyecto base para tienda en linea

Gilberto Gomez Glez

# First commit

Creacion del proyecto y primera prueba
# Second Commit 

Se crearion diferentes modulos para dividir el proyecto en modulos
Header
Main
Footer
se crea nav para el menu 

# Tercer commit
Se agrega CardWidget
Se agrega link para estilos material
Se agrega itemlistcontainer y se envia parametro 

# cuarto commit 
se agrega componente itemcount
    > dentro el itemcount se agrega boton con menos y mas para cambiar valor en pantalla
se muestrar la informacion dentro del componente itemlistcontainer

# Quinto commit
Se agrega modulo item y itemlist e interconectan entre si
La peticion se realiza y se muestra la informacion de los productos en pantalla

# Sexto commit
Se agrega modulo itemdetailcontainer y itemdetail y se interconectan entre si
La peticion se realiza en el componente itemdetailcontainer y se la pasamos al ittemdetail
para mostrar la informacion
# Septimo commit
Se agregaron rutas al proyecto tanton en los menus como en el detalle del producto. 
Al darle click sobre el boton de home este te lleva al listado de todos los productos y cada category muestra solo la categoria de esos productos usando parametros.
tambien se incorporo el detalle del producto al darle click sobre el boton de ver detalle se muestra solo el producto seleccionado.

# Octavo commit
Sincronizacion de itemcount
se re-utilizo un componente que ya habiamos hecho anteriormente y se agrega una varialble de estado en itemdetail para asingar la cantidad enviada
del itemcount a utilizar en el itemdetail para mostrar un mensaje u otro. 
# noveno
Use context 
En el cart.jsx agregue listado los articulos del carrito y funcionalidad para mostrar todos los productos que se han seleccionado. En el cartwidget use el context para mostrart el total de carrito en la compra, al agregar el producto al carrito. Adicional a esto agrega los funciones en el cartContext IsinCart, clearCart, removeItem y handleCartUpdate - en la cual agrego el proceso de agregar o edicion los registros al carrito de compras.

# decimo commit 
Se agrego funcionalidad para totalizar el carrito total y cantidad adicional se modifico el cardwidget para mostrar el total de productos y no mostrar nada si no se tiene seleccionado informacion.

# Onceavo commit
se añadio la conexion a firebase para extraer los datos y posterior a ello realizar peticiones para mostrar los datos en los componentes de itemlistcontainer y itemdetailcontainer.

# Doceavo commit
Se añade metodo para guardar ordenes y entragar numero al cliente de la orden generada 

