import { SideBar } from "../Components/SideBar";
import "./CurrentOrder.css";
import ItemList from "../Components/ItemList";


export function CurrentOrder() {
  return (
    <div className="currentOrderContainer">
      <SideBar />
      <div className="currentOrderContent">
        <h1>Current Orders</h1>
        <div className="currentOrderList">
          <ItemList />
        </div>
      </div>
    </div>
  );
}
