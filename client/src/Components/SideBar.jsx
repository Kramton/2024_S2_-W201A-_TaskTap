import { Link } from "react-router-dom";
import "./SideBar.css"

export function SideBar() {
    return (
        <div className="sideBarContainer">
            <div className="sidebar">
                <div className="logout">
                    <button>Logout</button>
                </div>
                <div className="menu">
                    <Link to="/Account">
                        <button>Account</button>
                    </Link>
                    <Link to="/Button2">
                        <button>Button2</button>
                    </Link>
                    <Link to="/Button3">
                        <button>Button3</button>
                    </Link>
                    <Link to="/Chat">
                        <button>Chat</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}