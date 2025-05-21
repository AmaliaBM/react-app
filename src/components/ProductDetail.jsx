import List from "../components/List";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import productsData from "../data/Myproductdata.json";
function ProductDetail(props) {
  const { id } = useParams();
  const productDetail = productsData.find(
    (product) => product.id === parseInt(id)
  );
  const coments = productDetail.reviews.map((review, index) => (
    <p className="reseñas-usuarios" key={index}>
      <li>
        <strong> Nombre: </strong>
        {review.reviewerName}
      </li>
      <li>
        <strong>Email: </strong>
        {review.reviewerEmail}
      </li>
      <li>
        <strong>Fecha:</strong> {review.date}
      </li>
      <li>
        <strong>Comentario: </strong>
        {review.comment}
      </li>
      <li>
        <strong>Valoracion: </strong>
        {review.rating}
      </li>
    </p>
  ));
  return (
    <div className="container-details">
      <img className="imagen-producto" src={productDetail.images}></img>
      <h4> {productDetail.title}</h4>
      <p>
        <strong>Descripción del producto:</strong> {productDetail.description}
      </p>
      <p>
        <strong>Valoración: </strong>
        {productDetail.rating}
      </p>
      <p>
        <strong>Política de devolución: </strong>
        {productDetail.returnPolicy}
      </p>
      <p>
        <strong>Reseñas: </strong>
        {coments}
      </p>
    </div>
  );
}
export default ProductDetail;
