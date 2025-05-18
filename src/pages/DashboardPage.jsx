import AgregarProducto from "../components/AgregarProducto";
import List from "../components/List";

function DashboardPage (props){
    return (
        <div>
            <AgregarProducto setAllProducts={props.setAllProducts} />
            <List productos={props.productos} />
       </div>
    )
}

export default DashboardPage;