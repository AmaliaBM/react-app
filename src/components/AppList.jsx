import { useState } from "react"; //Importamos useState desde react para manejar el estado del componente
import Myproductdata from "../data/Myproductdata.json"; //Importamos datos de JSONLocal
import ProductList from "./List"; // Importamos el componente que mostrará la lista de productos (List.jsx)

function AppList() { // Creamos un estado inicial usando los datos del JSON
  // productListArr es el array actual, y setProductListArr es la función para actualizarlo
  const [productListArr, setProductListArr] = useState(Myproductdata);

   // Esta función elimina un producto de la lista por su índice
  const handleDelete = (indexToDelete) => {
    // Filtramos el array para excluir el producto con el índice recibido
    const updatedList = productListArr.filter((_, index) => index !== indexToDelete);
    // Actualizamos el estado con la nueva lista sin el producto eliminado
    setProductListArr(updatedList);
  };

  // Renderizamos el componente
  return (
    <div>
      <h3>Productos disponibles</h3>
      <ProductList products={productListArr} onDelete={handleDelete} />
       {/* Mostramos el componente ProductList (la lista completa)
          Le pasamos los productos y la función para borrar como props */}
    </div>
  );
}
// Exportamos el componente para poder usarlo en otras partes del proyecto
export default AppList;
