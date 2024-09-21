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
                    <Link to="/Button3">
                        <button>Current orders</button>
                    </Link>
                    <Link to="/Button4">
                        <button>Order history</button>
                    </Link>
                    <button>Chat</button>
                    <button>Help</button>
                </div>
            </div>
        </div>
    )
}