import { Link } from "react-router-dom";
import "./SideBar.css"

export function SideBar() {
    return (
        <div className="sideBarContainer">
            <div className="sidebar">
                <div className="menu">
                    <Link to="/Account">
                        <button>Account</button>
                    </Link>
                    <Link to="/NewOrders">
                        <button>New orders</button>
                    </Link>
                    <Link to="/CurrentOrder">
                        <button>Current Orders</button>
                    </Link>
                    <Link to="/OrderHistory">
                        <button>Order History</button>
                    </Link>
                    <button>Chat</button>
                    <button>Help</button>
                </div>
            </div>
        </div>
    )
}