import ListItem from "./ListItem"; // Componente que representa un solo ítem

function List({ productos, setAllProducts }) {
  const handleDeleteProduct = (productId) => {
    const newProducts = productos.filter(
      (producto) => producto.id !== productId
    );
    setAllProducts(newProducts);
  };

  return (
    <ul>
      {/* Recorremos el array de productos recibido como prop.
          Por cada producto, renderizamos un componente ListItem.
          Le pasamos como props:
            - producto: el objeto con los datos del producto actual
            - index: el índice en el array (usado para identificar cuál eliminar)
            - onDelete: la función para eliminar un producto 
            Lo del "products" está sacado de la manguísima, no sé qué tengo que mapear... sé construir la estructura, no sé elegir exactamente qué va donde... tengo que darle una vuelta*/}
      {productos.map((producto, index) => {
        return (
          <ListItem
            key={index}
            producto={producto}
            onDelete={() => {
              handleDeleteProduct(producto.id);
            }}
          />
        );
      })}
    </ul>
  );
}

export default List;
