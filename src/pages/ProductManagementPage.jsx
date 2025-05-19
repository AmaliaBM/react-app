import AgregarProducto from "../components/AgregarProducto"; 

import "./ProductManagementPage.css";


function ProductManagementPage(props) {
  return (
    <div className="product-management-page">
      <AgregarProducto setAllProducts={props.setAllProducts} />
     
    </div>
  );
}

export default ProductManagementPage;
