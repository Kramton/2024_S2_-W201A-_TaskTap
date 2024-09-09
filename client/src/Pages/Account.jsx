// import { Link } from "react-router-dom"
import "./Account.css"
import { SideBar } from "../Components/SideBar";

export function Account() {
    return (
        <div className="container">
            {/* <div className="sidebar">
                <div className="logout">
                    <button>Logout</button>
                </div>
                <div className="menu">
                    <button>Account</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                    <button>Button 4</button>
                </div>
            </div> */}
            <SideBar/>
            <div className="content">
                <h1>Account</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim cupiditate maxime, cum at voluptas ducimus placeat accusamus quis distinctio quia sed modi odit voluptatum omnis incidunt praesentium. At, temporibus.</p>
            </div>
        </div>
    )
}
