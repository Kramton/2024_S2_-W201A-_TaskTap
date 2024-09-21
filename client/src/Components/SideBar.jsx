import { Link } from "react-router-dom";
import "./SideBar.css"

export function SideBar() {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="logout">
                    <button>Logout</button>
                </div>
                <div className="menu">
                    <Link to="/Account">
                        <button>Account</button>
                    </Link>
                    <Link to="/Button2">
                        <button>Tasks</button>
                    </Link>
                    <Link to="/Button3">
                        <button>Button3</button>
                    </Link>
                    <Link to="/Button4">
                        <button>Button4</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}