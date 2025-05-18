import { useState } from "react"

function AgregarProducto(props) {

    const [ titleInputValue, setTitleInputValue ] = useState("")
    const [ descriptionInputValue, setDescriptionInputValue ] = useState("")
    const [ categoryInputValue, setCategoryInputValue ] = useState("")
    const [ priceInputValue, setPriceInputValue ] = useState(0)
    const [ discountPercentageInputValue, setDiscountPercentageInputValue ] = useState(0)
    const [ stockInputValue, setStockInputValue ] = useState(0)

    const handleTitleChange = (event) => {
        setTitleInputValue(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescriptionInputValue(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategoryInputValue(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPriceInputValue(event.target.value)
    }

    const handleDiscountPercentageChange = (event) => {
        setDiscountPercentageInputValue(event.target.value)
    }

    const handleStockChange = (event) => {
        setStockInputValue(event.target.value)
    }

    const handleAddProduct = (event) => {
        event.preventDefault()

        const productToAdd = {
            title: titleInputValue,
            description: descriptionInputValue,
            category: categoryInputValue,
            price: priceInputValue,
            discountPercentage: discountPercentageInputValue,
            stock: stockInputValue,
        }
        //props.setAllProducts([...props.allProducts, productToAdd])
        props.setAllProducts( (valorActualDelEstado) => {
            //retornamos cual queremos que sea el nuevo valor del estado

            let nuevoValorDelEstado= [...valorActualDelEstado, productToAdd]
            return nuevoValorDelEstado
        })
    
    }

  return (
    <div>
      
      <h2>Formulario para añadir producto</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={handleTitleChange} value={titleInputValue}/>
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" onChange={handleDescriptionChange} value={descriptionInputValue}/>
        </div>

        <div>
          <label htmlFor="category">Category: </label>
          <input type="text" name="category" onChange={handleCategoryChange} value={categoryInputValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={priceInputValue}/>
        </div>

        <div>
          <label htmlFor="discountPercentage">Discount percentage: </label>
          <input type="number" name="discountPercentage" onChange={handleDiscountPercentageChange} value={discountPercentageInputValue}/>
        </div>

        <div>
          <label htmlFor="stock">Stock: </label>
          <input type="number" name="stock" onChange={handleStockChange} value={stockInputValue}/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AgregarProducto