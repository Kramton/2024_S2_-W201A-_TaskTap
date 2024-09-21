// import { Link } from "react-router-dom"
import "./Account.css"
import { SideBar } from "../Components/SideBar";

export function Account(props) {
    return (
        <div className="container">
            
            <SideBar/>
            <div className="content">
                <h1>Account</h1>
                {/*
                    props.userLoggedIn
                    show authenticated user credetials here*/
                }
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim cupiditate maxime, cum at voluptas ducimus placeat accusamus quis distinctio quia sed modi odit voluptatum omnis incidunt praesentium. At, temporibus.</p>
            </div>
        </div>
    )
}
