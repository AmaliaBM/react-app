import "./ListItem.css";

function ListItem({ producto, onDelete }) {
  return (
    <li className="list-style">
      {producto.images != null && (
        <img className="list-image" src={producto.images[0]} />
      )}
      <div className="list">
        <strong>{producto.title}</strong> Precio: ${producto.price}{" "}
        {/*Accedemos al nombre de cada producto, es dinámico*/}
        <br />
        {producto.price > 1500
          ? "Gama alta"
          : producto.price > 500
          ? "Gama media"
          : "Gama baja"}
        {/*Comparamos precio, esta es una fórmula condicional de comparación con operador ternario, ejercicio 2 punto 2.*/}
        <br />
        {producto.stock > 0 ? "✔️ Disponible" : "❌ Sin Stock"}{" "}
        {/*condicional booleano */}
        <br />
        {/*Añade separación entre elementos de una lista, es un elemento HTML que se utiliza para crear un salto de línea en el texto. Esencialmente, hace que el texto se desplace a la siguiente línea, como si se presionara la tecla Enter en un editor de texto */}
        <button className="delete-button" onClick={onDelete}>
          Eliminar
        </button>
        {/*botón borrar */}
      </div>
    </li>
  );
}

export default ListItem;

/*operador ternario, síntaxis: 
  condición ? valorSiEsVerdadero : valorSiEsFalso*/
