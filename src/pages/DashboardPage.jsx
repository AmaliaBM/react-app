
import List from "../components/List";
import "./DashboardPage.css";

function DashboardPage(props) {
  return (
    <div className="dashboard-page">
     
      <List productos={props.productos} setAllProducts={props.setAllProducts} />
    </div>
  );
}

export default DashboardPage;
