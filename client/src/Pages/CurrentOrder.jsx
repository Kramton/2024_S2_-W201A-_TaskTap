import { SideBar } from "../Components/SideBar";
import "./CurrentOrder.css";
import ItemList from "../Components/ItemList";

export function CurrentOrder() {
    return (
        <div className="currentOrderContainer">
            <SideBar/>
            <div className="currentOrder">
                <h1>Current Orders</h1>
            </div>
            <div className="currentOrder">
                <ItemList/>
            </div>    
        </div>
    )
}