import { useState } from "react";

import Myproductdata from "../data/Myproductdata.json";

function AppList (){
    const [productListArr, setProductListArr] = useState(Myproductdata);

  // ✅ Mover la función aquí arriba
  const handleDelete = (indexToDelete) => {
    const updatedList = productListArr.filter((_, index) => index !== indexToDelete);
    setTravelListArr(updatedList);
  };

  return (
    <div>
      <h3>lorem ipsum</h3>
      <ul>
        {productListArr.map((cadaProducto, index) => (
          <li key={index}>
            {cadaProducto.destination}
            {/*<img src={cadaProducto.image} alt={cadaProducto.destination} />
            {cadaProducto.totalCost}
            {cadaProducto.description}
            {cadaProducto.days}

            {/* Condicional: etiquetas según el precio }
            {cadaObjetodeDestino.totalCost <= 350 && <span> - Great Deal</span>}
            {cadaObjetodeDestino.totalCost >= 1500 && <span> - Premium</span>}

            {/* Condicional: etiqueta si es all inclusive }
            {cadaObjetodeDestino.allInclusive && <span> - All Inclusive</span>}

            {/* Botón para eliminar}
            <button onClick={() => handleDelete(index)}>Delete</button>*/}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AppList;