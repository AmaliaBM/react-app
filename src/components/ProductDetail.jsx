import List from "../components/List";
import { useParams } from "react-router-dom";
import productsData from "../data/Myproductdata.json";
function ProductDetail(props) {
  const { id } = useParams();
  const productDetail = productsData.find(
    (product) => product.id === parseInt(id)
  );
  console.log(productDetail);

  return (
    <div>
      {" "}
      {/*pasamos todos los elementos :)*/}
      <h3>{productDetail.description}</h3>
    </div>
  );
}
export default ProductDetail;
