import ListItem from "./ListItem"; // Componente que representa un solo ítem

function List({ products, onDelete }) {
  return (
    <ul>
       {/* Recorremos el array de productos recibido como prop.
          Por cada producto, renderizamos un componente ListItem.
          Le pasamos como props:
            - producto: el objeto con los datos del producto actual
            - index: el índice en el array (usado para identificar cuál eliminar)
            - onDelete: la función para eliminar un producto 
            Lo del "products" está sacado de la manguísima, no sé qué tengo que mapear... sé construir la estructura, no sé elegir exactamente qué va donde... tengo que darle una vuelta*/}
      {products.map((producto, index) => (
        <ListItem
          key={index} // clave única para que React identifique cada elemento
          producto={producto} // los datos del producto
          index={index} // el índice, necesario para saber cuál eliminar
          onDelete={onDelete} // la función de eliminar, pasada desde AppList
        />
      ))}
    </ul>
  );
}

// Exportamos el componente List para poder usarlo en otros archivos
export default List;
