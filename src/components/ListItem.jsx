import "./ListItem.css";
import { Link } from "react-router-dom";

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
        {
          // Clasificación por categoría con operador ternario
          producto.category === "beauty" || producto.category === "fragances"
            ? "Cuidado personal"
            : producto.category === "furniture" ||
              producto.category === "home-decoration"
            ? "Hogar y decoración"
            : producto.category === "groceries" ||
              producto.category === "kitchen-accesories"
            ? "Supermercado "
            : producto.category === "laptops" ||
              producto.category === "mobile-accesories"
            ? "Tecnología"
            : producto.category === "mens-shirts" ||
              producto.category === "mens-shoes" ||
              producto.category === "mens-watches"
            ? "Moda y joyería masculina"
            : "Otros"
        }
        <br />
        {producto.stock > 0 ? "✔️ Disponible" : "❌ Sin Stock"}{" "}
        {/*condicional booleano */}
        <br />
        {/*Añade separación entre elementos de una lista, es un elemento HTML que se utiliza para crear un salto de línea en el texto. Esencialmente, hace que el texto se desplace a la siguiente línea, como si se presionara la tecla Enter en un editor de texto */}
        <button className="action-button" onClick={onDelete}>
          Eliminar
        </button>
        <Link to={`/edit-form/${producto.id}`}>
          <button className="action-button">Editar</button>{" "}
        </Link>
        <Link to={`/details/${producto.id}`}>
          <button className="action-details">Detalles</button>{" "}
        </Link>
      </div>
    </li>
  );
}

export default ListItem;

/*operador ternario, síntaxis: 
  condición ? valorSiEsVerdadero : valorSiEsFalso*/
