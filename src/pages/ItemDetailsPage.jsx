import { useParams } from "react-router-dom";

import productsData from "../data/Myproductdata.json";

function ItemDetailsPage (props){
    const {id} = useParams();
    const productDetail = productsData.find((product) => product.id === parseInt(id));
    return (
       <div>
        {productDetail.title}
       </div>
    )
}

export default ItemDetailsPage;