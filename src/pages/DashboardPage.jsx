import AgregarProducto from "../components/AgregarProducto";
import List from "../components/List";
import "./DashboardPage.css";

function DashboardPage(props) {
  return (
    <div className="dashboard-page">
      <AgregarProducto setAllProducts={props.setAllProducts} />
      <List productos={props.productos} setAllProducts={props.setAllProducts} />
    </div>
  );
}

export default DashboardPage;
