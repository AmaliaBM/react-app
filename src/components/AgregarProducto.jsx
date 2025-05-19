import { useState } from "react";
import "./AgregarProducto.css";

function AgregarProducto(props) {
  const [titleInputValue, setTitleInputValue] = useState(
    props.product ? props.product.title : ""
  );
  const [descriptionInputValue, setDescriptionInputValue] = useState(
    props.product ? props.product.description : ""
  );
  const [categoryInputValue, setCategoryInputValue] = useState(
    props.product ? props.product.category : ""
  );
  const [priceInputValue, setPriceInputValue] = useState(
    props.product ? props.product.price : 0
  );
  const [discountPercentageInputValue, setDiscountPercentageInputValue] =
    useState(props.product ? props.product.discountPercentage : 0);
  const [stockInputValue, setStockInputValue] = useState(
    props.product ? props.product.stock : 0
  );

  const handleTitleChange = (event) => {
    setTitleInputValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionInputValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryInputValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceInputValue(event.target.value);
  };

  const handleDiscountPercentageChange = (event) => {
    setDiscountPercentageInputValue(event.target.value);
  };

  const handleStockChange = (event) => {
    setStockInputValue(event.target.value);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const productToAdd = {
      title: titleInputValue,
      description: descriptionInputValue,
      category: categoryInputValue,
      price: priceInputValue,
      discountPercentage: discountPercentageInputValue,
      stock: stockInputValue,
    };
    //Hacemos que funcione el botón de editar
    if (props.product) {
      // si viene por props, es un edit
      props.setAllProducts((products) => {
        const index = products.findIndex(
          (eachProduct) => eachProduct.id === props.product.id
        );
        products[index] = {
          ...props.product,
          ...productToAdd, // se sobrescribe la edición
        };
        return products;
      });
    } else {
      //props.setAllProducts([...props.allProducts, productToAdd])
      props.setAllProducts((valorActualDelEstado) => {
        //retornamos cual queremos que sea el nuevo valor del estado

        let nuevoValorDelEstado = [productToAdd, ...valorActualDelEstado];
        return nuevoValorDelEstado;
      });
    }
  };

  return (
    <div className="formulario-agregar-producto">
      <h2 className="titulo-formulario">Formulario para añadir producto</h2>

      <form className="contenido-formulario" onSubmit={handleAddProduct}>
        <div className="contenido-formulario">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            onChange={handleTitleChange}
            value={titleInputValue}
          />
        </div>

        <div className="contenido-formulario">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            onChange={handleDescriptionChange}
            value={descriptionInputValue}
          />
        </div>

        <div className="contenido-formulario">
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            name="category"
            onChange={handleCategoryChange}
            value={categoryInputValue}
          />
        </div>

        <div className="contenido-formulario">
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            onChange={handlePriceChange}
            value={priceInputValue}
          />
        </div>

        <div className="contenido-formulario">
          <label htmlFor="discountPercentage">Discount percentage: </label>
          <input
            type="number"
            name="discountPercentage"
            onChange={handleDiscountPercentageChange}
            value={discountPercentageInputValue}
          />
        </div>

        <div className="contenido-formulario">
          <label htmlFor="stock">Stock: </label>
          <input
            type="number"
            name="stock"
            onChange={handleStockChange}
            value={stockInputValue}
          />
        </div>

        {!props.product ? (
          <button type="submit" className="add-button">
            Add
          </button>
        ) : (
          <button type="submit" className="add-button">
            Edit
          </button>
        )}
        {/* end IF */}
      </form>
    </div>
  );
}

export default AgregarProducto;
