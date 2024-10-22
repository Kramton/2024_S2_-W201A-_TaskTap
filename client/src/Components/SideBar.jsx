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
                        <button>New Orders</button>
                    </Link>
                    <Link to="/CurrentOrder">
                        <button>Current Orders</button>
                    </Link>
                    <Link to="/OrderHistory">
                        <button>Order History</button>
                    </Link>
                    <Link to="/Professionals">
                        <button>Professionals</button>
                    </Link> 
                    <button>Chat</button>
                    <Link to="/Help">
                        <button>Help</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
