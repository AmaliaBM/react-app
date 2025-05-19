import { useParams } from "react-router-dom";
import "./ItemDetailsPage.css"

import productsData from "../data/Myproductdata.json";
import AgregarProducto from "../components/AgregarProducto";

function ItemDetailsPage (props){
    const {id} = useParams();
    const productDetail = productsData.find((product) => product.id === parseInt(id));
    return (
        <div className="item-details-page">
            <AgregarProducto setAllProducts={props.setAllProducts} product={productDetail} />
        </div>
    )
}

export default ItemDetailsPage;