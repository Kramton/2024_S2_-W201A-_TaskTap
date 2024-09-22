import { SideBar } from "../Components/SideBar";
import "./OrderHistory.css"
import ItemList from "../Components/ItemList";

export function OrderHistory() {
    return (
        <div className="orderHistoryContainer">
            <SideBar/>
            <div className="orderHistory">
                <h1>Order History</h1>
            </div>
            <div className="orderHistory">
                <ItemList/>
            </div> 
        </div>
    )
}