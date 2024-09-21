import { SideBar } from "../Components/SideBar";
import "./OrderHistory.css"

export function OrderHistory() {
    return (
        <div className="orderHistoryContainer">
            <SideBar/>
            <div className="orderHistory">
                <h1>Order History</h1>
            </div>
            
        </div>
    )
}